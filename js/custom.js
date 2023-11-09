const darkFavicon = 'https://create.david.qa/images/icon-moon.gif';
const lightFavicon = 'https://create.david.qa/images/icon-sun.gif';

const favicon = document.querySelector('link[rel="icon"]');

// Set favicon 
function setFavicon(src) {
  favicon.setAttribute('href', src);
}

// Get system preference
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const systemPrefersDark = darkModeMediaQuery.matches;

// Get stored preference
const storedPref = sessionStorage.getItem('theme');

// Default to system pref
let currentTheme = systemPrefersDark ? 'dark' : 'light';

// If stored pref, use that
if (storedPref) {
  currentTheme = storedPref;
}

// Set initial theme
setTheme();

// Listen for system pref changes
darkModeMediaQuery.addEventListener('change', e => {
  if (!storedPref) {
    // If no stored pref, follow system pref
    currentTheme = e.matches ? 'dark' : 'light'; 
    setTheme();
  } 
});

// Toggle button
const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {
  // Switch theme
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  // Store preference
  sessionStorage.setItem('theme', currentTheme);
  
  // Set theme
  setTheme();
});

function setTheme() {
  const isDark = currentTheme === 'dark';
  
  setFavicon(isDark ? darkFavicon : lightFavicon);
  
  if (isDark) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
}
