var ready;

ready = function() {

  // vex

  vex.defaultOptions.className = 'vex-theme-os';

  //pagepiling init

  $('#pagepiling').pagepiling({
    menu: '#pagepiling_menu',
    anchors: ['page1', 'page2', 'page3'],
    sectionsColor: ['#000', '#DDE6F6', '#000'],
    loopTop: true,
    loopBottom: true,
    navigation: {
      'bulletsColor': '#fff',
      'position': 'right',
      'tooltips': ['Intro', 'How it Works', 'test']
    }
  });

  $('#header').sidebar();

}

$(document).ready(ready);
$(document).on('page:load', ready);
