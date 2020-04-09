$(document).ready(function() {
    const $errorIcon = $("#errorIcon");
    const $errorMessage = $("#provideEmailMessage");
    const $inputField = $("#emailSubmitForm input");
    const $submitButton = $("#emailSubmitForm button");

    $errorMessage.hide();
    $errorIcon.hide();

    $inputField.on("click", function() {
        if ($(this).val() === "Email Address") this.value = "";
    });

    $submitButton.on("click", function(e) {
        if (validateEmail($inputField.val())) {
            $errorIcon.hide();
            $errorMessage.hide();
            alert("Form Submitted!");
        } else {
            e.preventDefault();
            $errorIcon.show();
            $errorMessage.show();
        }
    });

    function validateEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
        return false;
    }
});