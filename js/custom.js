$(function() {

// Check if dark mode enabled by system
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark');
} 

// Toggle theme  
const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
    
});