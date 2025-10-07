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

//Alleen uitvoeren als de knoppen bestaan
if(schoolBtn && personalBtn && schoolProjects && personalProjects){
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
}

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


//Modals voor Ben & Sam
document.addEventListener('DOMContentLoaded', () => {
//Open modal als je op een naam klikt 
  document.querySelectorAll('.infoLinks').forEach(link => {
    link.addEventListener('click', function(e){
      const name = this.textContent.trim().toLowerCase();
      if(name.includes('ben devos')) {
      e.preventDefault();
      document.getElementById('modal-ben').style.display = 'block';
      } else if (name.includes('sam pittois')) {
      e.preventDefault();
      document.getElementById('modal-sam').style.display = 'block';
      }
    });
  });

//Sluit de modal als je op de X klikt
  document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function(){
      const modalId = this.getAttribute('data-modal');
      document.getElementById(modalId).style.display = 'none';
      });
    });
  });

  //Lightbox voor de carousel
  const lightbox = document.getElementById('lightBox');
  const lightboxContent = document.getElementById('lightboxContent');
  const closeBtn = document.getElementById('closeLightBox');

  document.querySelectorAll('.carousel-item, .carousel video').forEach(el => {
    el.addEventListener('click', function(){
      lightboxContent.innerHTML = ''; //Verwijder vorige content
      if(el.tagName.toLowerCase() === 'img'){
        const img = document.createElement('img');
        img.src = el.src;
        img.alt = el.alt;
        lightboxContent.appendChild(img);
      } else if (el.tagName.toLowerCase() === 'video'){
          const source = el.querySelector('source');
          const video = document.createElement('video');
          video.src = source ? source.src : el.src;
          video.controls = true;
          video.autoplay = true;
          lightboxContent.appendChild(video);
      }
      lightbox.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', function(){
    lightbox.style.display = 'none';
    lightboxContent.innerHTML = ''; //Cleanup
});