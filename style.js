/* to make pages */
const homeDiv = document.getElementById("home-page")
const aboutDiv = document.getElementById("about-page")
const projectsDiv = document.getElementById("projects-page")
const funsiesDiv = document.getElementById("funsies-page")
const homeLinkDiv = document.getElementById("header-logo")
const aboutLinkDiv = document.getElementById("header-about")
const projectsLinkDiv = document.getElementById("header-projects")
const funsiesLinkDiv = document.getElementById("footer-funsies")

homeLinkDiv.onclick = (_event) => {
    homeDiv.style.display = "block";
    aboutDiv.style.display = "none";
    projectsDiv.style.display = "none";
    funsiesDiv.style.display = "none";
};

aboutLinkDiv.onclick = (_event) => {
    homeDiv.style.display = "none";
    aboutDiv.style.display = "block";
    projectsDiv.style.display = "none";
    funsiesDiv.style.display = "none";
};

projectsLinkDiv.onclick = (_event) => {
    homeDiv.style.display = "none";
    aboutDiv.style.display = "none";
    projectsDiv.style.display = "block";
    funsiesDiv.style.display = "none";
};

funsiesLinkDiv.onclick = (_event) => {
    homeDiv.style.display = "none";
    aboutDiv.style.display = "none";
    projectsDiv.style.display = "none";
    funsiesDiv.style.display = "flex";
};


/* dark mode stuff */
const checkbox = document.getElementById("darkmode-check")
const homebackground = document.getElementById("home-name")
const logo = document.getElementById("header-logo")
const giticon = document.getElementById("git-icon")
const mailicon = document.getElementById("mail-icon")
const linkedinicon = document.getElementById("linkedin-icon")

checkbox.addEventListener("change",(event) => {
    if (event.currentTarget.checked) {
        document.body.classList.toggle("dark-mode");
        homebackground.classList.toggle("dark-mode");
        logo.src="dark-logo.png";
        logo.alt="logo";
        giticon.style="color: #d1eae7";
        mailicon.style="color: #d1eae7";
        linkedinicon.style="color: #d1eae7";
    }
    else {
        document.body.classList.toggle("dark-mode");
        homebackground.classList.toggle("dark-mode");
        logo.src="logo.png";
        logo.alt="logo";
        giticon.style="color: black";
        mailicon.style="color: black";
        linkedinicon.style="color: black";
    }
})


