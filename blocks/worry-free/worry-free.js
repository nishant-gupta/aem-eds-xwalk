export default function decorate(block) {
  const featuresData = Array.from(block.querySelectorAll('.worry-free > div')).slice(1).map((feature) => {
    const iconClass = feature.querySelector('.icon').classList[1];
    const title = feature.querySelector('strong').textContent;
    const description = feature.querySelector('p:last-of-type').textContent;
    return { iconClass, title, description };
  });

  block.innerHTML = `
    <h2>${block.querySelector('h2').textContent}</h2>
    <div class="worry-free-features">
      ${featuresData.map((feature) => `
        <div class="feature">
          <img src="${getIconPath(feature.iconClass)}" alt="${feature.title}">
          <p>${feature.title}</p>
          <p>${feature.description}</p>
        </div>
      `).join('')}
    </div>
  `;
}

/**
 * Maps icon class to the appropriate image path
 * @param {string} iconClass The class representing the icon
 * @returns {string} The path to the corresponding icon image
 */
function getIconPath(iconClass) {
  const iconMap = {
    'icon-delivery-express': 'icon-sleep-trial.svg',
    'icon-delivery-next-day': 'icon-free-shipping.svg',
    // Add mappings for other icons as needed
  };
  return iconMap[iconClass] || 'default-icon.svg';
}
