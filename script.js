// Mobile nav toggle functionality
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '60px';
    navLinks.style.right = '20px';
    navLinks.style.backgroundColor = '#2C6E49';
    navLinks.style.padding = '1rem';
    navLinks.style.borderRadius = '8px';
  });
}
