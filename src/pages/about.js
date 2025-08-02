import { createElement } from '../utils/domHelpers';
import { aboutData } from '../data/about-data';

export function createAboutPage(container) {
  const aboutWrapper = createElement('div', { className: 'about-page' });
  
  // Create all sections
  const headerSection = createAboutHeader();
  const storySection = createStorySection();
  const teamSection = createTeamSection();
  const valuesSection = createValuesSection();
  
  // Append sections
  aboutWrapper.appendChild(headerSection);
  aboutWrapper.appendChild(storySection);
  aboutWrapper.appendChild(teamSection);
  aboutWrapper.appendChild(valuesSection);
  
  container.appendChild(aboutWrapper);
}

function createAboutHeader() {
  const header = createElement('div', { className: 'about-header' });
  
  const title = createElement('h1', { textContent: 'About Bella Vista' });
  const subtitle = createElement('p', { 
    className: 'about-subtitle',
    textContent: 'A culinary journey that began with passion'
  });
  
  header.appendChild(title);
  header.appendChild(subtitle);
  
  return header;
}

function createStorySection() {
  const section = createElement('div', { className: 'story-section' });
  
  const storyContent = createElement('div', { className: 'story-content' });
  
  const title = createElement('h2', { textContent: 'Our Story' });
  
  aboutData.story.forEach(paragraph => {
    const p = createElement('p', { 
      className: 'story-paragraph',
      textContent: paragraph 
    });
    storyContent.appendChild(p);
  });
  
  section.appendChild(title);
  section.appendChild(storyContent);
  
  return section;
}

function createTeamSection() {
  const section = createElement('div', { className: 'team-section' });
  
  const title = createElement('h2', { textContent: 'Meet Our Team' });
  const teamGrid = createElement('div', { className: 'team-grid' });
  
  aboutData.team.forEach(member => {
    const memberCard = createElement('div', { className: 'team-member-card' });
    
    const memberAvatar = createElement('div', { 
      className: 'member-avatar',
      textContent: member.avatar
    });
    
    const memberName = createElement('h3', { 
      className: 'member-name',
      textContent: member.name 
    });
    
    const memberRole = createElement('p', { 
      className: 'member-role',
      textContent: member.role 
    });
    
    const memberBio = createElement('p', { 
      className: 'member-bio',
      textContent: member.bio 
    });
    
    memberCard.appendChild(memberAvatar);
    memberCard.appendChild(memberName);
    memberCard.appendChild(memberRole);
    memberCard.appendChild(memberBio);
    teamGrid.appendChild(memberCard);
  });
  
  section.appendChild(title);
  section.appendChild(teamGrid);
  
  return section;
}

function createValuesSection() {
  const section = createElement('div', { className: 'values-section' });
  
  const title = createElement('h2', { textContent: 'Our Values' });
  const valuesGrid = createElement('div', { className: 'values-grid' });
  
  aboutData.values.forEach(value => {
    const valueCard = createElement('div', { className: 'value-card' });
    
    const valueIcon = createElement('div', { 
      className: 'value-icon',
      textContent: value.icon
    });
    
    const valueTitle = createElement('h3', { 
      className: 'value-title',
      textContent: value.title 
    });
    
    const valueDescription = createElement('p', { 
      className: 'value-description',
      textContent: value.description 
    });
    
    valueCard.appendChild(valueIcon);
    valueCard.appendChild(valueTitle);
    valueCard.appendChild(valueDescription);
    valuesGrid.appendChild(valueCard);
  });
  
  section.appendChild(title);
  section.appendChild(valuesGrid);
  
  return section;
}