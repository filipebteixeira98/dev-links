(function () {
  const mode = localStorage.getItem('DevLinks:mode');

  if (mode === 'light') {
    document.documentElement.classList.add('light');
  }
})();

function toggleMode() {
  const html = document.documentElement;

  if (html.classList.contains('light')) {
    html.classList.remove('light');
    localStorage.setItem('DevLinks:mode', 'dark');
  }
  else {
    html.classList.add('light');
    localStorage.setItem('DevLinks:mode', 'light');
  }

  // html.classList.toggle('light');
}