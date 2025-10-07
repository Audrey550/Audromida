const schoolBtn = document.querySelector('.schoolbtn');
const personalBtn = document.querySelector('.personalbtn');
const schoolProjects = document.querySelector('.school-projects');
const personalProjects = document.querySelector('.personal-projects');

//Selecteer alle titles van de projecten
const projectTitles = document.querySelectorAll('.project-title');

//Verberg alle project info elementen
function hideAllProjectInfo() {
  const allProjectInfos = document.querySelectorAll('.project-info');
  allProjectInfos.forEach(info => info.classList.add('hidden'));
}

//Toon het eerste project info element
function showFirstProjectInfo(containerSelector) {
  const firstInfo = document.querySelector(`${containerSelector} .project-info`);
  if (firstInfo) {
    firstInfo.classList.remove('hidden');
  }
}

//Toon schoolprojecten bij klik
schoolBtn.addEventListener('click', function(e) {
  e.preventDefault();
  schoolProjects.style.display = 'block';
  personalProjects.style.display = 'none';
  hideAllProjectInfo();
  showFirstProjectInfo('.school-projects');
});

//Toon personal projecten bij klik
personalBtn.addEventListener('click', function(e) {
  e.preventDefault();
  personalProjects.style.display = 'block';
  schoolProjects.style.display = 'none';
  hideAllProjectInfo();
  showFirstProjectInfo('.personal-projects');
});

//Eventlistener voor elke project title
projectTitles.forEach(title => {
  title.addEventListener('click', function(e) {
    e.preventDefault();
    hideAllProjectInfo();
    const projectInfo = this.nextElementSibling;
      projectInfo.classList.remove('hidden');
  });
});

//Bij het laden: Toon schoolprojecten en het eerste project info
document.addEventListener('DOMContentLoaded', function() {
  schoolBtn.click();
  const firstSchoolInfo = document.querySelector('.school-projects .project-info');
  if (firstSchoolInfo) {
    firstSchoolInfo.classList.remove('hidden');
  }
});

function showTab(tabName, event){
  const tabs = document.querySelectorAll('.skills-content');
  const buttons = document.querySelectorAll('.tab-btn');

  tabs.forEach(tab => {
    tab.classList.add('hidden');
  });

  buttons.forEach(btn => {
    btn.classList.remove('active');
  });

  document.getElementById(tabName).classList.remove('hidden');
  event.target.classList.add('active');

}

//Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('open')
  navLinks.classList.toggle('active');
});
