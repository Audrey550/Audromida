document.addEventListener('DOMContentLoaded', () => {
//Mailerlite popup automatisch tonen
const popupOverlay = document.getElementById('popupOverlay');
const closePopupBtn = document.getElementById('closePopup');

//Open popup 1 seconde na het laden van de pagina
setTimeout(() => {
    popupOverlay.style.display = 'flex';
    requestAnimationFrame(() => {
        popupOverlay.style.opacity = '1';
    });
}, 1000);

//Sluit de popup
if (closePopupBtn && popupOverlay) {
    closePopupBtn.addEventListener('click', () => {
        popupOverlay.style.opacity = '0';
        setTimeout(() => {
            popupOverlay.style.display = 'none';
        }, 500);
    });

    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.style.opacity = '0';
            setTimeout(() => {
                popupOverlay.style.display = 'none';
            }, 500);
        }
    });
}

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
    schoolBtn.click();
    const firstSchoolInfo = document.querySelector('.school-projects .project-info');
    if (firstSchoolInfo) {
      firstSchoolInfo.classList.remove('hidden');
    }
  }
});

//SKILLS SECTIE
function showTab(tabName, event){
  const tabContent = document.getElementById(tabName);
  if(!tabContent) return;

  //Vind de juiste groep van tab-knoppen en content
  const tabsGroup = tabContent.closest('.skills-tabs');
  const allTabs = tabsGroup.querySelectorAll('.skills-content');
  const allButtons = tabsGroup.querySelectorAll('.tab-btn');

  //Verberg alle content in deze groep
  allTabs.forEach(tab => tab.classList.add('hidden'));

  //Verwijder active class van alle knoppen in deze groep
  allButtons.forEach(btn => btn.classList.remove('active'));

  //Toon de gekozen tab en activeer de knop
  tabContent.classList.remove('hidden');

  //Activeer de juiste knop
  if (trigger instanceof Event) {
    trigger.target.classList.add('active');
  } else if (trigger instanceof HTMLElement) {
    trigger.classList.add('active');
  }
}

  document.addEventListener('DOMContentLoaded', () => {
  //Activeer standaard "social" (soft skills)
  showTab('social', document.querySelector('button[onclick*="social"]'));

  //Activeer standaard "design" (hard skills)
  showTab('design', document.querySelector('button[onclick*="design"]'));

});

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

//Contact info popup
const email = document.getElementById('emailLink');
const phone = document.getElementById('phoneLink');
const popup = document.getElementById('contactPopup');
const closePopup = document.getElementById('closePopup');

function openPopup(e){
  e.preventDefault();
  popup.style.display = 'flex';
}

function closeContactPopup(){
  popup.style.display = 'none';
}

email.addEventListener('click', openPopup);
phone.addEventListener('click', openPopup);
closePopup.addEventListener('click', closeContactPopup);

popup.addEventListener('click', (e) => {
  if(e.target === popup){
    closeContactPopup();
  }
});

