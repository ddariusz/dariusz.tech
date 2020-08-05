function activateFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();        // W3C spec
  }
  else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();     // Firefox
  }
  else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();  // Safari
  }
  else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();      // IE/Edge
  }
  //element = $('#fullScreenElement').get(0);
};

function deactivateFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
};

