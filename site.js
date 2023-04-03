var check1,check2;    
function radioClick(c) {
    if (check1 != c) {
        check2 = 0;
        check1 = c
    }
    check2 ^= 1;
    c.checked = check2
}


(function () {
  var square = document.querySelector('.square');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation');
      }
    });
  });

  observer.observe(square);
})();
(function () {
  var square = document.querySelector('.squaree');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation2');
      }
    });
  });

  observer.observe(square);
})();







(function () {
  var square = document.querySelector('.square2');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation');
      }
    });
  });

  observer.observe(square);
})();
(function () {
  var square = document.querySelector('.squaree2');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation2');
      }
    });
  });

  observer.observe(square);
})();
