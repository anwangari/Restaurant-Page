import { createHomePage } from './pages/home';
import { createMenuPage } from './pages/menu';
import { createAboutPage } from './pages/about';

export function initializeWebsite() {
  setupNavigation();
  // Load home page by default
  loadPage('home');
}

function setupNavigation() {
  const homeBtn = document.getElementById('homeBtn');
  const menuBtn = document.getElementById('menuBtn');
  const aboutBtn = document.getElementById('aboutBtn');

  homeBtn.addEventListener('click', () => loadPage('home'));
  menuBtn.addEventListener('click', () => loadPage('menu'));
  aboutBtn.addEventListener('click', () => loadPage('about'));
}

function loadPage(pageName) {
  const contentDiv = document.getElementById('content');
  
  // Clear existing content
  contentDiv.innerHTML = '';
  
  // Remove active class from all nav buttons
  document.querySelectorAll('nav button').forEach(btn => 
    btn.classList.remove('active')
  );
  
  // Add active class to current button and load page
  switch(pageName) {
    case 'home':
      document.getElementById('homeBtn').classList.add('active');
      createHomePage(contentDiv);
      break;
    case 'menu':
      document.getElementById('menuBtn').classList.add('active');
      createMenuPage(contentDiv);
      break;
    case 'about':
      document.getElementById('aboutBtn').classList.add('active');
      createAboutPage(contentDiv);
      break;
  }
}