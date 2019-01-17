function addition() {
    return 42;
}
module.exports = addition;

function playFunction(soundid, targetid, classname) {
  if (sound) {
    var audio = document.getElementById(soundid); 
    audio.play(); 
  }
  sound = true;
  $('#' + targetid).addClass(classname);
}
playFunction('sound1', 'topleft', 'litTopLeft');te