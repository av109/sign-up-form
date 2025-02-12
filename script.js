document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector("form");
    let error = document.querySelector("#error");

    form.addEventListener("submit", function(event) {
        let password = document.querySelector("#password").value;
        let confirmPassword = document.querySelector("#confirmPassword").value;

        if (password === "" || confirmPassword === "") {
            error.innerHTML = "*passwords cannot be empty";
            event.preventDefault();
        } else if (password !== confirmPassword) {
            error.innerHTML = "*passwords do not match";
            event.preventDefault();
        } else {
            error.innerHTML = "";
        }
    });
});