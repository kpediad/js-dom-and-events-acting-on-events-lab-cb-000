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
function clearEmployeeListOnLinkClick() {
  $('.employee-list').get(0).innerHTML = '';
}

$('a[href="#"]').get(0).addEventListener('click', clearEmployeeListOnLinkClick);
$('input[type="submit"]').get(0).addEventListener('click', addNewLiOnClick);
