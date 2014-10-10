var ready;

ready = function() {

  //pagepiling init code
  
  $('#pagepiling').pagepiling({
    menu: '#menu',
    anchors: ['page1', 'page2', 'page3'],
    sectionsColor: ['#bfda00', '#2ebe21', '#2C3E50', '#51bec4'],
    loopTop: true,
    loopBottom: true
  });
}

$(document).ready(ready);
$(document).on('page:load', ready);
