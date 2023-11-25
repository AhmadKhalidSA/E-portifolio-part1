function toggleMenu() {
    const menu = document.querySelector(".menu-links"); // targeting two element
    const icon = document.querySelector(".hamburger-icon"); // targeting two element
    menu.classList.toggle("open"); //when ever we click it it will add or remove the open class which has styling
    icon.classList.toggle("open"); //when ever we click it it will add or remove the open class which has styling
}


