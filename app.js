const mobileToggleBtn = document.querySelector(".mobile-toggler");
const mainNavigation = document.querySelector(".container");

mobileToggleBtn.addEventListener("click", () => {
    const ifVisible = mainNavigation.getAttribute("data-visible");
    if (ifVisible === "false"){
        mainNavigation.setAttribute("data-visible", true);
        mobileToggleBtn.setAttribute("aria-expanded", true);
    } else {
        mainNavigation.setAttribute("data-visible", false);
        mobileToggleBtn.setAttribute("aria-expanded", false);
    }
});