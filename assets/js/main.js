/* Silkscreen theme — nav toggle + scroll fade-ins */
(function () {
  document.documentElement.classList.add('js');

  document.addEventListener('DOMContentLoaded', function () {
    // mobile nav
    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelector('.nav-links');
    if (toggle && links) {
      toggle.addEventListener('click', function () {
        toggle.classList.toggle('open');
        links.classList.toggle('open');
      });
      links.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
          toggle.classList.remove('open');
          links.classList.remove('open');
        }
      });
    }

    // scroll fade-ins
    var faders = document.querySelectorAll('.fade');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
      faders.forEach(function (el) { io.observe(el); });
    } else {
      faders.forEach(function (el) { el.classList.add('in'); });
    }
  });
})();
