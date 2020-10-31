const scriptURL = 'https://script.google.com/macros/s/AKfycbwxZy8FSIowo-PK012eKoekF-zXLcFs3hwjUUA5IRFLfy7Hs-o/exec';
const form = document.forms['google-sheet'];

var formsNeedValidation = document.getElementsByClassName("needs-validation");
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(formsNeedValidation, function (
    formNeedValidation
) {
    formNeedValidation.addEventListener(
        "submit",
        function (event) {
            if (formNeedValidation.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            formNeedValidation.classList.add("was-validated");
        },
        false
    );
});

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .catch(error => console.error('Error!', error.message))
})