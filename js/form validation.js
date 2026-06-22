document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const message = document.getElementById("formMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const text = document.getElementById("message").value.trim();
        const agree = document.getElementById("agree").checked;
        const type = document.querySelector("input[name='type']:checked");

        let errors = [];

        if (name.length < 3) errors.push("Name must have at least 3 characters.");
        if (!email.includes("@")) errors.push("Email must contain '@'.");
        if (text.length < 10) errors.push("Message is too short.");
        if (!type) errors.push("Please select request type.");
        if (!agree) errors.push("You must agree with data processing.");

        if (errors.length > 0) {
            message.style.color = "red";
            message.textContent = errors.join(" ");
        } else {
            message.style.color = "green";
            message.textContent = "Form is valid. Thank you!";
            form.reset();
        }
    });
});
