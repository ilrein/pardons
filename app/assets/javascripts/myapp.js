var ready;

ready = function() {

  console.log();

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

  var caption = $('.sidekick_caption');
  var tl1 = new TimelineLite();
  //tl1.add(TweenLite.to(caption, 1, {textDecoration:"underline", ease:Elastic.easeOut}));

  caption.on('mouseenter', function(){
    tl1.play();
  });

  caption.on('mouseleave', function(){
    tl1.reverse();
  });
  
}

$(document).ready(ready);
$(document).on('page:load', ready);
