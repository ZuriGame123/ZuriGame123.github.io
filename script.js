// Language toggle functionality
const langToggle = document.getElementById('langToggle');
let currentLang = localStorage.getItem('language') || 'zh';

// Initialize language on page load
function initLanguage() {
  if (currentLang === 'en') {
    switchLanguage('en');
  }
}

// Switch language
function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);

  // Update all elements with data attributes
  document.querySelectorAll('[data-zh][data-en]').forEach((el) => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  // Update toggle button
  langToggle.querySelector('.lang-text').textContent = lang === 'zh' ? 'ENG' : '中文';

  // Update HTML lang attribute
  document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
}

// Toggle language on button click
langToggle.addEventListener('click', () => {
  const newLang = currentLang === 'zh' ? 'en' : 'zh';
  switchLanguage(newLang);
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', initLanguage);