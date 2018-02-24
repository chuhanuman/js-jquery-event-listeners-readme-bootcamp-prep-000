//define functions here
function getIt() {
  $('p').on('click',function(){
    alert('Hey!');
  });
}
function frameIt() {
  $('img').on('keydown',function(){
    alert('Hey!');
  });
}
function pressIt() {
  $('input').on('keydown',function(key){
    if (key === 'g'){
      alert("I'm afraid I can't let you do that.");
    }
  });
}
function submitIt() {
  $('input').on('submit',function(){
    alert('Your form is going to be submitted now.');
  });
}
$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
