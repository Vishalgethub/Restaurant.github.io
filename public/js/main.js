
const menuBar = document.querySelector("#menu-bar");
const navbar = document.querySelector(".navbar");


const catagory = document.querySelectorAll(".catagory input");
const cataImg = document.querySelector("#c-img");
function submitted(){
  alert("You Order has been placed")
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");


menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("fa-times");
  menuBar.classList.toggle("active");
  navbar.classList.toggle("active");
});


document.addEventListener("scroll", () => {
  menuBar.classList.remove("fa-times");
  menuBar.classList.remove("active");
  navbar.classList.remove("active");


  connectSecWithNavLink();
});


catagory.forEach((element) => {
  element.addEventListener("click", () => {
    catagory.forEach((ele) => {
      ele.classList.remove("active");
    });

    let values = element.value;
    element.classList.add("active");
    cataImg.src = `./images/menu-${values}.jpg`;
  });
});


const connectSecWithNavLink = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    let linkAttribute = link.attributes.href.value;
    link.classList.remove("active");

    if (linkAttribute === `#${current}`) {
      link.classList.add("active");
    }
  });
};
