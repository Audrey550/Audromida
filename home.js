//Verkrijg de knoppen en project informatie
const schoolBtn = document.querySelector('.schoolbtn');
const personalBtn = document.querySelector('.personalbtn');
const schoolProjects = document.querySelector('.school-projects');
const personalProjects = document.querySelector('.personal-projects');
const schoolProjectInfo = document.querySelectorAll('.school-projects .project-info');
const personalProjectInfo = document.querySelectorAll('.personal-projects .project-info');

// Event listeners voor de knoppen (School en Personal)
schoolBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Voorkom het standaard gedrag

  //Verberg alle projectinfo van de personal projecten
    personalProjectInfo.forEach(function(projectInfo) {
      projectInfo.classList.add('hidden');
    });

  //Toon de school-projecten en verberg de personal projecten
    schoolProjects.style.display = 'block';
        personalProjects.style.display = 'none';
    });

personalBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Voorkom het standaard gedrag

    //Verberg alle projectinfo van de school projecten
    schoolProjectInfo.forEach(function(projectInfo) {
        projectInfo.classList.add('hidden');
    });

    //Toon de personal-projecten en verberg de school projecten
    personalProjects.style.display = 'block';
    schoolProjects.style.display = 'none';
});

//Voeg een click event listener toe aan elk project titel
const projectTitles = document.querySelectorAll('.project-title');
projectTitles.forEach(function(title) {
    title.addEventListener('click', function(e) {
        e.preventDefault(); // Voorkom het standaard gedrag
        const projectInfo = this.nextElementSibling; // Verkrijg de bijbehorende project info

        //Toggle de zichtbaarheid van de project info
        projectInfo.classList.toggle('hidden');
    });
});