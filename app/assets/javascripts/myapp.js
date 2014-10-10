var ready;

ready = function() {

  //pagepiling init code

  $('#pagepiling').pagepiling({
    menu: '#pagepiling_menu',
    anchors: ['page1', 'page2', 'page3'],
    sectionsColor: ['red', 'white', 'blue'],
    loopTop: true,
    loopBottom: true
  });
}

$(document).ready(ready);
$(document).on('page:load', ready);
