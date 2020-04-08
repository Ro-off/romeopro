$("body").append('<div id="rightBlurredContentFrame" class="blurredContentFrame"><div class="blurredContent" id="rightBlurredContent"></div></div> <div id="leftBlurredContentFrame" class="blurredContentFrame"><div class="blurredContent" id="leftBlurredContent"></div></div> <div id="navCover"></div>');

var $rightNavMenu = $('div.navMenu.right'),
  $leftNavMenu = $('div.navMenu.left'),
  $document = $(document),
  $rightNavButton = $('div.navbutton.right'),
  $leftNavButton = $('.navbutton.left'),
  $navCover = $('#navCover'),
  $rightBlurFrame = $('#rightBlurredContentFrame'),
  $rightBlurredContent = $('#rightBlurredContent'),
  $leftBlurFrame = $('#leftBlurredContentFrame'),
  $leftBlurredContent = $('#leftBlurredContent'),
  $content = $('.content'),
  $window = $(window);

setSizes();

if (! Modernizr.backdropfilter) {
  var $contentClone1 = $('.content').clone();
  var $contentClone2 = $('.content').clone();
  $contentClone1.appendTo('#rightBlurredContent');
  $contentClone2.appendTo('#leftBlurredContent');
} 


$(window).resize(function(){
  setSizes();
});

$rightNavButton.click(function(e){
  e.preventDefault();
  if (! $rightNavButton.hasClass('on')) {
    showOverlay('right');
  } else {
    hideOverlay('right');
  }
});

$leftNavButton.click(function(e){
  e.preventDefault();
  if (! $leftNavButton.hasClass('on')) {
    showOverlay('left');
  } else {
    hideOverlay('left');
  }
});

$navCover.click(function(){
   var side;
   if ( $leftNavButton.hasClass('on')) {
    side = 'left';
   } else {
    side = 'right';
  }
  hideOverlay(side);
});

function setSizes() {
  var targetHeight;
  if ($('body').height() >= $(window).height()) {
    targetHeight = $('body').height();
  } else {
    targetHeight = $(window).height();
  }

  $rightBlurredContent.css({
    'width':$document.width(),
    'height': targetHeight
  });
  $leftBlurredContent.css({
    'width': $document.width(),
    'height': targetHeight
  });
  $rightBlurFrame.height(targetHeight);
  $leftBlurFrame.height(targetHeight);
  $rightNavMenu.height(targetHeight);
  $leftNavMenu.height(targetHeight);
  $navCover.height(targetHeight);
  $rightBlurredContent.width($(window).width());
  $leftBlurredContent.width($(window).width());
}

function showOverlay(side) {
  setSizes();
  $navCover.fadeIn(300);

  if (side == 'right') {
    $rightNavButton.addClass('on');
    $leftNavButton.fadeOut('fast');
    setTimeout(function(){
      $rightNavMenu.addClass('on');
      if (! Modernizr.backdropfilter)  {
        $rightBlurFrame.addClass('on');
      }

    }, 100);
   } else {
    $leftNavButton.addClass('on');
    $rightNavButton.fadeOut('fast');
    setTimeout(function(){
      $leftNavMenu.addClass('on');
      if (! Modernizr.backdropfilter)  {
        $leftBlurFrame.addClass('on');
      }
    }, 100);
   }
 

}
function hideOverlay(side) {
  if (side == 'right') {
    $leftNavButton.fadeIn('fast');
    $rightNavButton.removeClass('on');
    $rightNavMenu.removeClass('on');
    if (! Modernizr.backdropfilter)  {
      $rightBlurFrame.removeClass('on');
    }
  } else {
    $rightNavButton.fadeIn('fast');
    $leftNavButton.removeClass('on');
    $leftNavMenu.removeClass('on');
    if (! Modernizr.backdropfilter)  {
      $leftBlurFrame.removeClass('on');
    }
  }
  setTimeout(function(){
    $navCover.fadeOut(300);
  }, 100);
}

