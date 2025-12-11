document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let successMsg = document.getElementById("successMsg");

    if (!name || !phone || !email || !message) {
        alert("Please fill out all fields!");
        return;
    }

    successMsg.style.display = "block";

    // smooth fade
    successMsg.style.opacity = 0;
    setTimeout(() => {
        successMsg.style.transition = "0.5s";
        successMsg.style.opacity = 1;
    }, 10);

    // reset form
    document.getElementById("contactForm").reset();
});
