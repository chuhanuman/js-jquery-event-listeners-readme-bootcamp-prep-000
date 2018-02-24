//define functions here
function getIt() {
  $('p').on('click',function(){
    alert('Hey!');
  });
}
function frameIt() {
  $('img').on('load',function(){
    alert('Tasty!');
  });
}
function pressIt() {
  $('#typing').on('keydown',function(key){
    if (key === 'g'){
      alert("I'm afraid I can't let you do that.");
    }
    alert(1);
  });
}
function submitIt() {
  $('form').on('submit',function(){
    alert('Your form is going to be submitted now.');
  });
}
$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
