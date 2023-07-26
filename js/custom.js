$(function() {

  // Get system preference
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const systemPrefersDark = darkModeMediaQuery.matches;
  
  // Get stored preference
  const storedPref = localStorage.getItem('theme');

  // Default to system pref
  let currentTheme = systemPrefersDark ? 'dark' : 'light';

  // If stored pref, use that
  if (storedPref) {
    currentTheme = storedPref;
  }

  // Set initial theme
  setTheme(currentTheme);

  // Listen for system pref changes
  darkModeMediaQuery.addEventListener('change', e => {
    if (!storedPref) {
      // If no stored pref, follow system pref
      setTheme(e.matches ? 'dark' : 'light'); 
    } 
  });

  // Toggle button
  const toggle = document.getElementById('theme-toggle');
  
  toggle.addEventListener('click', () => {
    // Switch theme
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Store preference
    localStorage.setItem('theme', currentTheme);
    
    // Set theme
    setTheme(currentTheme);
  });

  function setTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

});