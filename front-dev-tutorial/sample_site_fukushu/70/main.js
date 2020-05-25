document.addEventListener("DOMContentLoaded", function () {
  const ta = new TextAnimation('.animate-title');
});

class TextAnimation{
  constructor(el) {
    this.el = document.querySelector(el);
    this.chars = this.el.innerHTML.trim().split('');
    this.el.innerHTML = this._splitText();
  }

  _splitText() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace('/\s+/', '&nbsp;');
      return `${acc}<span class="char">${curr}</span>`;
    }, '');
  }
}
