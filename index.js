// add solution here
var theBeatlesPlay = function(musicians, instruments) {
  var newarray = [];
  for ( let i = 0; i < 4; i++) {
    newarray.push(musicians[i] + ' plays ' + instruments[i])
  }
    return newarray;
}

var johnLennonFacts = function(n) {
  var facts = []
  var number = 0
    while (n.length > number) {
      facts.push(n[number] + "!!!");
      number++;
    }
  return facts
}

var iLoveTheBeatles = function(1) {
  var beat = []
}