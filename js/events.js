//define functions here
function getIt() {
  $(document).on('keydown',function(){
    alert('Hey!');
  });
}
function frameIt() {
  $(document).on('keydown',function(){
    alert('Hey!');
  });
}
function pressIt() {
  $(document).on('keydown',function(){
    alert('Hey!');
  });
}
function submitIt() {
  $('input').on('submit',function(){
    alert('Hey!');
  });
}
$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
