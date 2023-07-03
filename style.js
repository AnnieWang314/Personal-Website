/* to make pages */
const homeDiv = document.getElementsByClassName("home-page")[0];
const aboutDiv = document.getElementsByClassName("about-page")[0];
const projectsDiv = document.getElementsByClassName("projects-page")[0];
const funsiesDiv = document.getElementsByClassName("funsies-page")[0];
const homeLinkDiv = document.getElementById("header-logo");
const aboutLinkDiv = document.getElementById("header-about");
const projectsLinkDiv = document.getElementById("header-projects");
const funsiesLinkDiv = document.getElementById("footer-funsies");

homeLinkDiv.onclick = (_event) => {
    homeDiv.style.display = "flex";
    aboutDiv.style.display = "none";
    projectsDiv.style.display = "none";
    funsiesDiv.style.display = "none";
};

aboutLinkDiv.onclick = (_event) => {
    homeDiv.style.display = "none";
    aboutDiv.style.display = "flex";
    projectsDiv.style.display = "none";
    funsiesDiv.style.display = "none";
};

projectsLinkDiv.onclick = (_event) => {
    homeDiv.style.display = "none";
    aboutDiv.style.display = "none";
    projectsDiv.style.display = "flex";
    funsiesDiv.style.display = "none";
};

funsiesLinkDiv.onclick = (_event) => {
    homeDiv.style.display = "none";
    aboutDiv.style.display = "none";
    projectsDiv.style.display = "none";
    funsiesDiv.style.display = "flex";
};


/* dark mode stuff */
const checkbox = document.getElementById("darkmode-check");
const homebackground = document.getElementsByClassName("home-name")[0];
const logo = document.getElementById("header-logo");
const giticon = document.getElementById("git-icon");
const mailicon = document.getElementById("mail-icon");
const linkedinicon = document.getElementById("linkedin-icon");
const footerline = document.getElementsByClassName("footer")[0];
const toggleback = document.getElementsByClassName("switch")[0];

checkbox.addEventListener("change",(event) => {
    if (event.currentTarget.checked) {
        document.body.classList.toggle("dark-mode");
        homebackground.classList.toggle("dark-mode");
        logo.src="dark-logo.png";
        logo.alt="logo";
        giticon.style.color="#d1eae7";
        mailicon.style.color="#d1eae7";
        linkedinicon.style.color="#d1eae7";
        footerline.classList.toggle("dark-mode");
        toggleback.classList.toggle("dark-mode");
    }
    else {
        document.body.classList.toggle("dark-mode");
        homebackground.classList.toggle("dark-mode");
        logo.src="logo.png";
        logo.alt="logo";
        giticon.style.color="black";
        mailicon.style.color="black";
        linkedinicon.style.color="black";
        footerline.classList.toggle("dark-mode");
        toggleback.classList.toggle("dark-mode");
    }
})


