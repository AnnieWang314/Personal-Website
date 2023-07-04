/* to make pages */
const homeDiv = document.getElementsByClassName("home-page")[0];
const aboutDiv = document.getElementsByClassName("about-page")[0];
const projectsDiv = document.getElementsByClassName("projects-page")[0];
const funsiesDiv = document.getElementsByClassName("funsies-page")[0];
const socialsDiv = document.getElementsByClassName("socials-page")[0];
const homeLinkDiv = document.getElementById("header-logo");
const aboutLinkDiv = document.getElementById("header-about");
const projectsLinkDiv = document.getElementById("header-projects");
const funsiesLinkDiv = document.getElementById("footer-funsies");
const smallHomeLink = document.getElementById("smallheader-logo");
const smallAboutLink = document.getElementById("drop-about");
const smallProjectsLink = document.getElementById("drop-projects");
const smallSocialsLink = document.getElementById("drop-socials");

homeLinkDiv.onclick = (_event) => {
    homeDiv.style.display = "flex";
    aboutDiv.style.display = "none";
    projectsDiv.style.display = "none";
    funsiesDiv.style.display = "none";
    socialsDiv.style.display = "none";
};

aboutLinkDiv.onclick = (_event) => {
    homeDiv.style.display = "none";
    aboutDiv.style.display = "flex";
    projectsDiv.style.display = "none";
    funsiesDiv.style.display = "none";
    socialsDiv.style.display = "none";
};

projectsLinkDiv.onclick = (_event) => {
    homeDiv.style.display = "none";
    aboutDiv.style.display = "none";
    projectsDiv.style.display = "flex";
    funsiesDiv.style.display = "none";
    socialsDiv.style.display = "none";
};
/*
funsiesLinkDiv.onclick = (_event) => {
    homeDiv.style.display = "none";
    aboutDiv.style.display = "none";
    projectsDiv.style.display = "none";
    funsiesDiv.style.display = "flex";
    socialsDiv.style.display = "none";
};
*/

smallHomeLink.onclick = (_event) => {
    homeDiv.style.display = "flex";
    aboutDiv.style.display = "none";
    projectsDiv.style.display = "none";
    funsiesDiv.style.display = "none";
    socialsDiv.style.display = "none";
};

smallAboutLink.onclick = (_event) => {
    homeDiv.style.display = "none";
    aboutDiv.style.display = "flex";
    projectsDiv.style.display = "none";
    funsiesDiv.style.display = "none";
    socialsDiv.style.display = "none";
};

smallProjectsLink.onclick = (_event) => {
    homeDiv.style.display = "none";
    aboutDiv.style.display = "none";
    projectsDiv.style.display = "flex";
    funsiesDiv.style.display = "none";
    socialsDiv.style.display = "none";
};

smallSocialsLink.onclick = (_event) => {
    homeDiv.style.display = "none";
    aboutDiv.style.display = "none";
    projectsDiv.style.display = "none";
    funsiesDiv.style.display = "none";
    socialsDiv.style.display = "flex";
}

/* dark mode stuff */
const checkbox = document.getElementById("darkmode-check");
const homebackground = document.getElementsByClassName("home-name")[0];
const logo = document.getElementById("header-logo");
const smallLogo = document.getElementById("smallheader-logo");
const giticon = document.getElementById("git-icon");
const giticon2 = document.getElementById("smallgit-icon");
const mailicon = document.getElementById("mail-icon");
const mailicon2 = document.getElementById("smallmail-icon");
const linkedinicon = document.getElementById("linkedin-icon");
const linkedinicon2 = document.getElementById("smalllinkedin-icon");
const footerline = document.getElementsByClassName("footer")[0];
const toggleback = document.getElementsByClassName("switch")[0];
const menutogline1 = document.getElementsByClassName("line")[0];
const menutogline2 = document.getElementsByClassName("line")[1];
const menutogline3 = document.getElementsByClassName("line")[2];
const actualMenuAbout = document.getElementById("drop-about");
const actualMenuProjects = document.getElementById("drop-projects");
const actualMenuSocials = document.getElementById("drop-socials");

checkbox.addEventListener("change",(event) => {
    if (event.currentTarget.checked) {
        document.body.classList.toggle("dark-mode");
        homebackground.classList.toggle("dark-mode");
        logo.src="dark-logo.png";
        logo.alt="logo";
        smallLogo.src="dark-logo.png";
        giticon.style.color="#d1eae7";
        mailicon.style.color="#d1eae7";
        linkedinicon.style.color="#d1eae7";
        giticon2.style.color="#d1eae7";
        mailicon2.style.color="#d1eae7";
        linkedinicon2.style.color="#d1eae7";
        footerline.classList.toggle("dark-mode");
        toggleback.classList.toggle("dark-mode");
        menutogline1.classList.toggle("dark-mode");
        menutogline2.classList.toggle("dark-mode");
        menutogline3.classList.toggle("dark-mode");
        actualMenuAbout.classList.toggle("dark-mode");
        actualMenuProjects.classList.toggle("dark-mode");
        actualMenuSocials.classList.toggle("dark-mode");
    }
    else {
        document.body.classList.toggle("dark-mode");
        homebackground.classList.toggle("dark-mode");
        logo.src="logo.png";
        logo.alt="logo";
        smallLogo.src="logo.png";
        giticon.style.color="black";
        mailicon.style.color="black";
        linkedinicon.style.color="black";
        giticon2.style.color="black";
        mailicon2.style.color="black";
        linkedinicon2.style.color="black";
        footerline.classList.toggle("dark-mode");
        toggleback.classList.toggle("dark-mode");
        menutogline1.classList.toggle("dark-mode");
        menutogline2.classList.toggle("dark-mode");
        menutogline3.classList.toggle("dark-mode");
        actualMenuAbout.classList.toggle("dark-mode");
        actualMenuProjects.classList.toggle("dark-mode");
        actualMenuSocials.classList.toggle("dark-mode");
    }
})

/* header menu toggle */
const menutoggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menutoggle.onclick = (_event) => {
    menu.classList.toggle("active");
}
document.addEventListener("click",(event) => {
    const targetElement = event.target;
    const isInsideMenu = targetElement.classList.contains("menu");
    const isMenuToggle = targetElement.classList.contains("menu-toggle");

    if (!isInsideMenu && !isMenuToggle) {
        menu.classList.remove("active");
    }
})


