import { createElement } from '../utils/domHelpers';
import { menuData } from '../data/menu-data';

export function createMenuPage(container) {
  const menuWrapper = createElement('div', { className: 'menu-page' });
  
  // Create header section
  const headerSection = createMenuHeader();
  
  // Create menu sections
  const menuSections = createMenuSections();
  
  // Append all sections
  menuWrapper.appendChild(headerSection);
  menuSections.forEach(section => menuWrapper.appendChild(section));
  
  container.appendChild(menuWrapper);
}

function createMenuHeader() {
  const header = createElement('div', { className: 'menu-header' });
  
  const title = createElement('h1', { textContent: 'Our Menu' });
  const subtitle = createElement('p', { 
    className: 'menu-subtitle',
    textContent: 'Crafted with passion, served with love'
  });
  
  header.appendChild(title);
  header.appendChild(subtitle);
  
  return header;
}

function createMenuSections() {
  return menuData.map(categoryData => {
    const section = createElement('div', { className: 'menu-section' });
    
    const categoryTitle = createElement('h2', { 
      className: 'menu-category-title',
      textContent: categoryData.category 
    });
    
    const itemsGrid = createElement('div', { className: 'menu-items-grid' });
    
    categoryData.items.forEach(item => {
      const itemCard = createElement('div', { className: 'menu-item-card' });
      
      const itemHeader = createElement('div', { className: 'menu-item-header' });
      const itemName = createElement('h3', { 
        className: 'menu-item-name',
        textContent: item.name 
      });
      const itemPrice = createElement('span', { 
        className: 'menu-item-price',
        textContent: item.price 
      });
      
      itemHeader.appendChild(itemName);
      itemHeader.appendChild(itemPrice);
      
      const itemDescription = createElement('p', { 
        className: 'menu-item-description',
        textContent: item.description 
      });
      
      if (item.popular) {
        const popularBadge = createElement('span', { 
          className: 'popular-badge',
          textContent: '★ Popular'
        });
        itemCard.appendChild(popularBadge);
      }
      
      itemCard.appendChild(itemHeader);
      itemCard.appendChild(itemDescription);
      itemsGrid.appendChild(itemCard);
    });
    
    section.appendChild(categoryTitle);
    section.appendChild(itemsGrid);
    
    return section;
  });
}