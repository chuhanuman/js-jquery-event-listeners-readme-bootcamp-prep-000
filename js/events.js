//define functions here
function getIt() {
  $('p').on('click',function(){
    alert('Hey!');
  });
}
function frameIt() {
  $(document).on('keydown',function(){
    alert('Hey!');
  });
}
function pressIt() {
  $('input').on('keydown',function(){
    alert('Hey!');
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
