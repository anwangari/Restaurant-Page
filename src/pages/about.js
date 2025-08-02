import { createElement } from '../utils/domHelpers';

export function createAboutPage(container) {
  const aboutWrapper = createElement('div', { className: 'about-page' });
  const title = createElement('h1', { textContent: 'About Us' });
  const placeholder = createElement('p', { 
    textContent: 'About content coming soon!',
    className: 'placeholder-text'
  });
  
  aboutWrapper.appendChild(title);
  aboutWrapper.appendChild(placeholder);
  container.appendChild(aboutWrapper);
}