


/* function validate(){
    if(){

    }
} */
let nts = document.getElementById('notes');
function validate() {
    if (nts.value === NaN) {
        alert('Please provide us with some notes')
    }
    else {
        alert("Submitted succesfully.")
    }
}

const email = document.getElementById('eMails');

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});

