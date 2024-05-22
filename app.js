// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const links = document.querySelector(".links")

const Toggle = document.querySelector('.nav-toggle').addEventListener("click", () => {
    console.log('clicked')
    // if (links.classList.contains("show-links")){
    //     links.classList.remove("show-links")
    // }
    // else {
    //    links.classList.add("show-links")

    //simple way to do a toggle.

    links.classList.toggle("show-links")
});