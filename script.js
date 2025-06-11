(function () {
  const mode = localStorage.getItem('DevLinks:mode');

  if (mode === 'light') {
    document.documentElement.classList.add('light');

    document.querySelector('#profile img').setAttribute('src', './assets/avatar-light.png');
  }
})();

function toggleMode() {
  const html = document.documentElement;

  const imgElement = document.querySelector('#profile img');

  if (html.classList.contains('light')) {
    html.classList.remove('light');

    localStorage.setItem('DevLinks:mode', 'dark');

    imgElement.setAttribute('src', './assets/avatar.png');
  }
  else {
    html.classList.add('light');

    localStorage.setItem('DevLinks:mode', 'light');

    imgElement.setAttribute('src', './assets/avatar-light.png');
  }

  // html.classList.toggle('light');
}