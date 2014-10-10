var ready;

ready = function() {

  // vex

  vex.defaultOptions.className = 'vex-theme-os';

  //pagepiling init

  $('#pagepiling').pagepiling({
    menu: '#pagepiling_menu',
    anchors: ['page1', 'page2', 'page3'],
    sectionsColor: ['#007148', '#60A859', '#9BDA6A'],
    loopTop: true,
    loopBottom: true,
    navigation: {
      'bulletsColor': '#000',
      'position': 'right',
      'tooltips': ['intro', 'test', 'test']
    }
  });

  $('#header').sidebar();

}

$(document).ready(ready);
$(document).on('page:load', ready);
