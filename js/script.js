(function($) {

    "use strict";

    $('.service-slider').slick({
        slidesToShow: 3,
        responsive: [{
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    const tabs = document.querySelectorAll('[data-tab-target]')
    const tabContents = document.querySelectorAll('[data-tab-content]')

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget)
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active')
            })
            tabs.forEach(tab => {
                tab.classList.remove('active')
            })
            tab.classList.add('active')
            target.classList.add('active')
        })
    });

    //Contact Us: Mail service
    //I use third party service Email.js for this.

    function submitForm() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        //Checking if required fields are not empty
        if (!name || !email || !message) {
            alert("Please fill in all the required fields.");
            return;
        }

        // Initialize Email.js with your credentials
        emailjs.init("user_your_emailjs_user_id");

        // Preparing the email parameters
        var emailParams = {
            to_email: "20.shahab.ahmad.04@gmail.com", //My Gmail address
            from_name: name,
            from_email: email,
            message: message
        };

        // Sending the email using Email.js
        emailjs.send("mailgun", "template_your_emailjs_template_id", emailParams)
            .then(function(response) {
                console.log("Email sent successfully:", response);
                alert("Form submitted successfully!");
                document.getElementById("contactForm").reset();
            })
            .catch(function(error) {
                console.error("Email failed to send:", error);
                alert("An error occurred. Please try again later.");
            });
    }



})