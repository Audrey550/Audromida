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

document.addEventListener('DOMContentLoaded', () => {
  const latestBlogContainer = document.getElementById('latestBlog');
  if(!latestBlogContainer) return;

  fetch('blog.html')
  .then(response => response.text())
  .then(htmlString => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    const firstPost = doc.querySelector('.blogPost');
    if(firstPost){
        const title = firstPost.querySelector('h3')?.innerText || 'Untitled';
        const date = firstPost.querySelector('.date')?.innerText || '';
        const paragraphs = firstPost.querySelectorAll('p');
        const excerpt = paragraphs.length > 1 ? paragraphs[1].innerText : '';
        const link = firstPost.querySelector('a')?.getAttribute('href') || 'blog.html';

        latestBlogContainer.innerHTML = `
        <h2>Blog</h2>
        <article class="blogPreview">
          <h3>${title}</h3>
          <p class="date">${date}</p>
          <p>${excerpt}</p>
          <a href= "blog.html">${link === '#' ? 'Read more ->' : 'Read more ->'}</a>
        </article>
      `;
    }
  })
  .catch(error => {
    console.error('Fout bij het laden van de laatste blogpost', error);
  });
});

//Language - switcher
document.querySelectorAll('[data-i18n]').forEach(el => {
  const langButtons = document.querySelectorAll("[id^='lang-']");
  let currentLang = localStorage.getItem("lang") || "en";

  loadLanguage(currentLang);

  langButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedLang = button.id.split("-")[1];
      loadLanguage(selectedLang);
      localStorage.setItem("lang", selectedLang);
    });
  });
});

function loadLanguage(lang){
  fetch(`languages/${lang}.json`)
  .then(response => response.json())
  .then(translations => applyTranslations(translations))
  .catch(err => console.error("Error loading language file:", err));
}

function applyTranslations(translations) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const text = key.split('.').reduce((o,i) => o ? o[i] : null, translations);
    if (text) el.innerHTML = text;
  });
}