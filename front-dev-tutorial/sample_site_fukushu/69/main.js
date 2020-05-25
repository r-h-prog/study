document.addEventListener("DOMContentLoaded", function () {
  const el = document.querySelector('.animate-title');
  // 配列で格納するためにsplit()を使う
  const str = el.innerHTML.trim().split("");
  el.innerHTML = str.reduce((acc, curr) => {
    curr = curr.replace('/\s+/', '&nbsp;');
    return `${acc}<span class="char">${curr}</span>`;
  }, '');
});
