import { createElement } from '../utils/domHelpers';
import { heroData, featuresData, testimonialsData, contactData } from '../data/home-data.js';

export function createHomePage(container) {
  const homeWrapper = createElement('div', { className: 'home-page' });
  
  // Create all sections
  const heroSection = createHeroSection();
  const featuresSection = createFeaturesSection();
  const testimonialsSection = createTestimonialsSection();
  const contactSection = createContactSection();
  
  // Append sections to wrapper
  homeWrapper.appendChild(heroSection);
  homeWrapper.appendChild(featuresSection);
  homeWrapper.appendChild(testimonialsSection);
  homeWrapper.appendChild(contactSection);
  
  // Append wrapper to container
  container.appendChild(homeWrapper);
}

function createHeroSection() {
  const heroSection = createElement('div', { className: 'hero-section' });
  const heroContent = createElement('div', { className: 'hero-content' });
  
  const title = createElement('h1', { textContent: heroData.title });
  const subtitle = createElement('p', { textContent: heroData.subtitle });
  const ctaButton = createElement('button', { 
    className: 'cta-button',
    textContent: heroData.ctaText
  });
  
  ctaButton.addEventListener('click', () => {
    // You can import and call menu page here
    console.log('Navigate to menu');
  });
  
  heroContent.appendChild(title);
  heroContent.appendChild(subtitle);
  heroContent.appendChild(ctaButton);
  heroSection.appendChild(heroContent);
  
  return heroSection;
}

function createFeaturesSection() {
  const section = createElement('div', { className: 'features-section' });
  const title = createElement('h2', { textContent: 'Why Choose Bella Vista?' });
  const grid = createElement('div', { className: 'features-grid' });
  
  featuresData.forEach(feature => {
    const card = createElement('div', { className: 'feature-card' });
    const icon = createElement('div', { 
      className: 'feature-icon',
      textContent: feature.icon 
    });
    const cardTitle = createElement('h3', { textContent: feature.title });
    const description = createElement('p', { textContent: feature.description });
    
    card.appendChild(icon);
    card.appendChild(cardTitle);
    card.appendChild(description);
    grid.appendChild(card);
  });
  
  section.appendChild(title);
  section.appendChild(grid);
  return section;
}

function createTestimonialsSection() {
  const section = createElement('div', { className: 'testimonials-section' });
  const title = createElement('h2', { textContent: 'What Our Customers Say' });
  const grid = createElement('div', { className: 'testimonials-grid' });
  
  testimonialsData.forEach(testimonial => {
    const card = createElement('div', { className: 'testimonial-card' });
    const text = createElement('p', { 
      className: 'testimonial-text',
      textContent: `"${testimonial.text}"`
    });
    const author = createElement('p', { 
      className: 'testimonial-author',
      textContent: `- ${testimonial.author}`
    });
    
    card.appendChild(text);
    card.appendChild(author);
    grid.appendChild(card);
  });
  
  section.appendChild(title);
  section.appendChild(grid);
  return section;
}

function createContactSection() {
  const section = createElement('div', { className: 'contact-section' });
  const title = createElement('h2', { textContent: 'Visit Us Today' });
  const info = createElement('div', { className: 'contact-info' });
  
  contactData.forEach(contact => {
    const item = createElement('div', { className: 'contact-item' });
    const itemTitle = createElement('h3', { textContent: contact.title });
    const itemInfo = createElement('p', { textContent: contact.info });
    
    item.appendChild(itemTitle);
    item.appendChild(itemInfo);
    info.appendChild(item);
  });
  
  section.appendChild(title);
  section.appendChild(info);
  return section;
}