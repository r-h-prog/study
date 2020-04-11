document.addEventListener('DOMContentLoaded', function () {

    const cb = function () {
        if (isIntersecting) {
            const ta = new TextAnimation(el);
            ta.animate();
        }
    }
// io.observe(child1);
// io.observe(child2);

});

const so = new ScrollObserver('.animate-title', cb);


class ScrollObserver {
    constructor(els, cb, options) {
        this.els = document.querySelectorAll(els);
        const defaultOptions = {
            root: null,
            rootMargin: "300px 0px",
            threshold: [0, 0.5, 1], 
            once: true
        };
        this.cb = cb
        this.options = Object.assign(defaultOptions, options);
        this.once = this.options.once;
        this._init();
    }
    _init() {
        const callback = function (entries, observer) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // const ta = new TextAnimation(entry.target);
              // ta.animate();
                this.cb(entry.target, true);
                if (this.once) {
                    observer.unobserve(entry.target);
                }
            } else {
                this.cb(entry.target, false);
            }
          });
        };
        this.io = new IntersectionObserver(callback.bind(this), this.options);
        this.els.forEach((el) => this.io.observe(el));
        
    }

    destroy() {
        this.io.disconnect();
    }
}

