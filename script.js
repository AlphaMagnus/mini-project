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

function sendEmail() {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "varupandya2412@gmail.com",
    Password : "8DB4C081463DEE1100F2268ED862E60A4CDC",
    To : 'varupandya2412@gmail.com',
    From : "varupandya2412@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});