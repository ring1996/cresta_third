/*==================================================
** SP Menu
==================================================*/
jQuery(function ($) {
  var gnav = $('#js-nav'),
    menuBtn = $('#js-btn'),
    body = $(document.body),
    classToAssignGnav = 'is-active-gnav';

  function toggleGnav() {
    if(body.hasClass(classToAssignGnav)) {
      gnav.fadeOut(200);
      body.removeClass(classToAssignGnav);
    } else {
      gnav.fadeIn();
      body.addClass(classToAssignGnav);
    }
  }
  menuBtn.on('click', toggleGnav);
});

/*==================================================
** SP Menu
==================================================*/
jQuery(function ($) {
  var gnav = $('#js-nav'),
    menuBtn = $('#js-btn'),
    body = $(document.body),
    classToAssignGnav = 'is-active-gnav';

  function toggleGnav() {
    if(body.hasClass(classToAssignGnav)) {
      gnav.fadeOut(200);
      body.removeClass(classToAssignGnav);
    } else {
      gnav.fadeIn();
      body.addClass(classToAssignGnav);
    }
  }
  menuBtn.on('click', toggleGnav);
});

/*==================================================
** headerChange
==================================================*/
(function() {
  let mvHeight;
  const body = document.querySelector('body');
  const classToAssignHeader = 'is-active-header';

  function fetchMvHeight() {
    return mvHeight = window.innerHeight;
  }

  function headerChange() {
    let scrollHeight = window.pageYOffset;
    console.log('----------');
    console.log(mvHeight);
    console.log(scrollHeight);

    if (mvHeight <= scrollHeight) {
      body.classList.add(classToAssignHeader);
    } else {
      body.classList.remove(classToAssignHeader);
    }
  }

  window.addEventListener('load', fetchMvHeight);
  window.addEventListener('resize', fetchMvHeight);
  window.addEventListener('scroll', headerChange);
  window.addEventListener('load', headerChange);
})();


/*==================================================
** SP Menu
==================================================*/
(function() {
  const body = document.querySelector('body');
})();

