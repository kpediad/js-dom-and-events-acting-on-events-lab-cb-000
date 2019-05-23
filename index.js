function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}
function retrieveEmployeeInformation() {
  return $('input[name="name"]').get(0).value;
}
function addNewElementAsLi() {
  $('.employee-list').get(0).append(`<li>${retrieveEmployeeInformation()}</li>`);
}
function addNewLiOnClick() {
  addNewElementAsLi();
  $('input[name="name"]').get(0).value = "";
}

$('input[type="submit"]').get(0).addEventListener('click', addNewLiOnClick);
preventRefreshOnSubmit()
