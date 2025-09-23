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
    if (projectInfo && projectInfo.classList.contains('project-info')) {
      projectInfo.classList.remove('hidden');
    }
  });
});

//Bij het laden: Toon schoolprojecten en het eerste project info
document.addEventListener('DOMContentLoaded', function() {
  schoolBtn.click();
});