const anchorTags = document.querySelectorAll('nav ul li a');


anchorTags.forEach(anchor => {
    anchor.addEventListener('mouseenter', () => {
        anchor.style.color = '#7e03bb';
    });

    anchor.addEventListener('mouseleave', () => {
        anchor.style.color = '#260b0b';
    });
});


const menu = document.querySelector(".navbar");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const msg = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name : ${fullName.value}<br> Email : ${email.value}<br>
   Phone Number : ${phone.value}<br> Message : ${msg.value}`;


  Email.send({
    SecureToken : " 07cb851e-8bee-4c93-b3dc-3611f0e9211a",
    Host : "smtp.elasticemail.com",
    Username : "varupandya2412@gmail.com",
    Password : "8DB4C081463DEE1100F2268ED862E60A4CDC",
    To : 'varupandya2412@gmail.com',
    From : "varupandya2412@gmail.com",
    Subject : "Book Chapter Query",
    Body : bodyMessage
}).then(
  message => {
    if(message == "OK") {
       Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
       });
    }
  }
);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();

  form.reset();
  
  return false;
});