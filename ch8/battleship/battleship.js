var view = {
  displayMessage: function(msg) {
    var messageArea = document.getElementById('messageArea');
    messageArea.innerHTML = msg;
  },
  displayHit: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute('class', 'hit');
  },
  displayMiss: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute('class', 'miss');
  }
}


view.displayHit('06');
view.displayMiss('13');
view.displayHit('24');
view.displayMiss('41');
view.displayHit('10');
view.displayHit('34');
view.displayMiss('56');
view.displayMiss('01');
view.displayHit('26');
view.displayHit('11');
view.displayHit('12');
view.displayHit('44');
view.displayHit('16');


view.displayMessage('Tap tap, is this thing on?');
