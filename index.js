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
  let listElements = $('.employee-list li');
  //alert('skata');
  for(let i=0; i<listElements.length; i++) {
    listElements[i].remove();
  }
}

//$('a[href="#"]').addEventListener('click', clearEmployeeListOnLinkClick);
$('input[type="submit"]').addEventListener('click', addNewLiOnClick);
