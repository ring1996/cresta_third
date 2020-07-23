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
const mvHeight = window.innerHeight;
const scrollHeight = window.pageYOffset;
const body = document.querySelector('body');
const classToAssignHeader = 'is-active-header';

function headerChange() {
  if (mvHeight <= scrollHeight) {
    body.classList.add(classToAssignHeader);
  } else {
    body.classList.remove(classToAssignHeader);
  }
}

window.addEventListener('scroll', headerChange);
window.addEventListener('load', headerChange);

