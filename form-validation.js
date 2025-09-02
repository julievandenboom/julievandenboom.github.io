// JavaScript source code
/**********
Date: 09/01/2025
Author: Joeseph Ryan Cole Sabio
Class: CITW 165
Exercise: Exercise 10
**********/

/**********
Date: 09/01/2025
Author: Your Full Name
Class: CITW 165
Exercise: Exercise 10
**********/

$(document).ready(function () {

    // Apply jQuery Validation
    $("#email_form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            email_confirm: {
                required: true,
                email: true,
                equalTo: "#email"
            },
            zip: {
                required: true,
                digits: true,
                minlength: 5,
                maxlength: 5
            }
        },
        messages: {
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            email_confirm: {
                required: "Please confirm your email address",
                email: "Please enter a valid email address",
                equalTo: "Email addresses must match"
            },
            zip: {
                required: "Please enter your zip code",
                digits: "Zip code must be numeric",
                minlength: "Zip code must be 5 digits",
                maxlength: "Zip code must be 5 digits"
            }
        },
        submitHandler: function (form) {
            form.submit(); // Redirects to join.html
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element); // Place error messages after fields
        }
    });

});
