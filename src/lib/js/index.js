import '../scss/autotyped.scss';
import { config } from './config';
import { $$, addClass, hasClass, removeClass } from './helpers';


export default class Autotyped {
  constructor(settings) {
    this.settings = Object.assign({}, config, settings);
    this.el = $$(this.settings.selector);
    this.text = this.el.map(t => t.innerText);
    this.interval = [];
  }

  init(settings) {
    this._assignSettings(settings);
    this._clearInterval();
    this.el.forEach((i, index) => {
      this._render(index);
    });
  }

  _render(i) {
    const text = this.settings.text.length ? this.settings.text[i].split('') : this.text[i].split('');
    let raw = '';
    if (!hasClass(this.el[i], 'at-init')) {
      addClass(this.el[i], 'at-init');
    }
    if (!hasClass(this.el[i], 'at-running')) {
      const w = this.el[i].clientWidth;
      const h = this.el[i].clientHeight;
      this.el[i].style.width = `${w}px`;
      this.el[i].style.height = `${h}px`;
      this.el[i].innerHTML = '';
      addClass(this.el[i], 'at-running');
      if (hasClass(this.el[i], 'at-done')) {
        removeClass(this.el[i], 'at-done');
      }
      const interval = setInterval(() => {
        if (!text.length) {
          clearInterval(this.interval[i]);
          this.el[i].innerHTML = raw;
          if (hasClass(this.el[i], 'at-running')) {
            removeClass(this.el[i], 'at-running');
            addClass(this.el[i], 'at-done');
            this.el[i].style.removeProperty('width');
            this.el[i].style.removeProperty('height');
          }
        } else {
          const char = text[0];
          this.el[i].innerHTML = raw;
          this.el[i].innerHTML += this.settings.animate ? `<span class="at-${this.settings.animation}"
                                                        style="animation-duration: ${this.settings.speed}ms">${char}</span>` : char;
          raw += char;
          text.splice(0, 1);
          if (char === ' ') {
            raw += ' ';
          }
        }
      }, this.settings.speed);
      this.interval.push(interval);
    }
  };

  _clearInterval() {
    this.interval.forEach((i, index) => {
      if (i) {
        clearInterval(i);
        this.el[index].innerHTML = this.text[index];
        removeClass(this.el[index], 'at-running');
      }
    });
    this.interval = [];
  }

  _assignSettings(settings) {
    if (settings) {
      this.settings = Object.assign({}, config, settings);
    }
  }
}
