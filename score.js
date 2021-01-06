module.exports = {

  scoreFrame: scoreFrame
}
function scoreFrame (frame){
  
  var sum = frame.reduce(function(a, b){
    return a + b;
});
return sum
}
