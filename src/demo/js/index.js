import './../scss/index.scss';


window.onload = (ev) => {
  const autotyped = new Autotyped();
  autotyped.init();
  const $submit = document.querySelector('.demo__form-button');
  const $animation = document.querySelector('#animation-select');
  const $speed = document.querySelector('#speed-select');

  $submit.addEventListener('click', (ev) => {
    autotyped.init({ speed: $speed.value, animation: $animation.value });
  });

  $animation.addEventListener('change', (ev) => {
    autotyped.init({ speed: $speed.value, animation: $animation.value });
  });

  $speed.addEventListener('change', (ev) => {
    autotyped.init({ speed: $speed.value, animation: $animation.value });
  });
};
