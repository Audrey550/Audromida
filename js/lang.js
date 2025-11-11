//Houd huidige vertalingen bij
window.currentTranslations = {};

//Functie om vertalingen toe te passen
function applyTranslations(translations) {
    window.currentTranslations = translations;
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const text = key.split('.').reduce((o, i) => (o ? o[i] : null), translations);
        if (text) {
            element.innerHTML = text;
        }
    });
}

//Laad vertalingen van JSON-bestand
function loadLanguage(lang) {
    fetch(`languages/${lang}.json`)
        .then(response => response.json())
        .then(translations => applyTranslations(translations))
        .catch(error => console.error("Error loading language file:", error));
}

//Haal taal op uit localStorage of stel standaard in op Engels
let currentLang = localStorage.getItem("lang") || "en";
loadLanguage(currentLang);

//Eventlisteners voor taalknoppen
document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll("[id^='lang-']");
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.id.split('-')[1];
            loadLanguage(selectedLang);
            localStorage.setItem("lang", selectedLang);
        });
    });
});