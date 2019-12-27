export const $$ = (selector) => {
  return [...document.querySelectorAll(selector)];
};

export const addClass = (el, c) => {
  el.classList.add(c);
};

export const removeClass = (el, c) => {
  el.classList.remove(c);
};

export const hasClass = (el, c) => {
  return el.classList.contains(c);
};
