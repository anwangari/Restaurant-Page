import { createElement } from '../utils/domHelpers';

export function createMenuPage(container) {
  const menuWrapper = createElement('div', { className: 'menu-page' });
  const title = createElement('h1', { textContent: 'Our Menu' });
  const placeholder = createElement('p', { 
    textContent: 'Menu content coming soon!',
    className: 'placeholder-text'
  });
  
  menuWrapper.appendChild(title);
  menuWrapper.appendChild(placeholder);
  container.appendChild(menuWrapper);
}