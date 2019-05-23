function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}
function retrieveEmployeeInformation() {
  return $('input[name="name"]').get(0).value;
}
function addNewElementAsLi(retrieveEmployeeInformation()) {
  $('.employee-list').get(0).append(`<li>${value}</li>`);
}


preventRefreshOnSubmit()
