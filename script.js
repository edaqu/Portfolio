const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

function sendMail(event){
    event.preventDefault();
    var params = {
        email: document.getElementById("email").value ,
    };
const serviceID = "service_jvjuwpm";
const templateID = "template_qi7uve2";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("email").value ="";
        document.getElementById("confirmationMessage").style.color = "green";
        document.getElementById("confirmationMessage").textContent = "Email sent successfully!";
        console.log(res);
    })
.catch((err) => {
    document.getElementById("confirmationMessage").style.color = "red";
    document.getElementById("confirmationMessage").textContent = "Failed to send email.";
    console.log(err);
});

}

