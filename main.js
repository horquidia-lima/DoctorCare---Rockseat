window.addEventListener("scroll", onScroll)

onScroll()

function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
}

function showNavOnScroll(){
    if(scrollY > 500) {
        navigation.classList.add("scroll")
    }else {
        navigation.classList.remove("scroll")
    }
}

function showBackToTopButtonOnScroll() {
    if(scrollY > 0) {
        backToTopButton.classList.add("show")
    }else {
        backToTopButton.classList.remove("show")
    }
}

function openMenu() {
    document.body.classList.add("menu-expanded")
}

function closeMenu() {
    document.body.classList.remove("menu-expanded")
}

//Biblioteca ScrollReveal aceita objecto como parametro

ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: "700",
}).reveal("#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content")


