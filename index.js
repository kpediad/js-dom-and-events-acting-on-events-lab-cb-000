function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}
preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return $('input[name="name"]').get(0).value;
}
function addNewElementAsLi() {
  $('.employee-list').append(`<li>${retrieveEmployeeInformation()}</li>`);
}
function addNewLiOnClick() {
  addNewElementAsLi();
  $('input[name="name"]').get(0).value = "";
}

$('input[type="submit"]').get(0).addEventListener('click', addNewLiOnClick);
