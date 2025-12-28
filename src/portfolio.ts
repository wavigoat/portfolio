import './style.css';

interface Project {
  title: string;
  category: 'coding' | '3d' | 'art';
  description: string;
  link?: string;
  image?: string;   // For Art
  embedId?: string; // For Sketchfab
}

const projects: Project[] = [
  // Coding
  { title: "E-commerce App", category: 'coding', description: "Built with React", link: "#" },
  
  // 3D Modeling (Using Sketchfab Embed IDs)
  { 
    title: "Captain's Quarters", 
    category: '3d', 
    description: "Low-poly room model", 
    embedId: "84507935bf7d4f37b2727e96406e581b" // Example ID from Sketchfab URL
  },
  // Art (Using Image URLs)
  { 
    title: "Digital Portrait", 
    category: 'art', 
    description: "Painted in Procreate", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/108588930_gB97ITZm0KdsDdW.png" // Replace with your image path
  },
  { 
    title: "Digital Portrait", 
    category: 'art', 
    description: "Painted in Procreate", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/107268651_TjO4G8kkg3HngRZ.png" // Replace with your image path
  },
  { 
    title: "Digital Portrait", 
    category: 'art', 
    description: "Painted in Procreate", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/98011997_yN5H7i3aYFDOQR4.png" // Replace with your image path
  },
  { 
    title: "Digital Portrait", 
    category: 'art', 
    description: "Painted in Procreate", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/92224893_oB6Wf30cGWjRyqS.png" // Replace with your image path
  },
  { 
    title: "Digital Portrait", 
    category: 'art', 
    description: "Painted in Procreate", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/92224893_oB6Wf30cGWjRyqS.png" // Replace with your image path
  },
  { 
    title: "Digital Portrait", 
    category: '3d', 
    description: "Painted in Procreate", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/90714223_07s9F0LeZntyym5.gif" // Replace with your image path
  },
  { 
    title: "Digital Portrait", 
    category: '3d', 
    description: "Painted in Procreate", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/90002584_qC4nG70GdmTBw9G.gif?1729200162" // Replace with your image path
  },
  { 
    title: "Digital Portrait", 
    category: '3d', 
    description: "Painted in Procreate", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/90714223_07s9F0LeZntyym5.gif" // Replace with your image path
  },
  { 
    title: "Digital Portrait", 
    category: 'art', 
    description: "Painted in Procreate", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/91805981_a5JKgU2iLDDBwi8.png" // Replace with your image path
  },
  { 
    title: "Digital Portrait", 
    category: 'art', 
    description: "Painted in Procreate", 
    image: "https://file.garden/ZaN3pZzqMBk7KeIf/gal.gif" // Replace with your image path
  },
];

const root = document.querySelector<HTMLDivElement>('#root')!;
root.innerHTML = `
  <h1 id="greeting">My Portfolio</h1>
  <nav class="tabs">
    <button class="tab-btn active" data-category="coding">Coding</button>
    <button class="tab-btn" data-category="3d">3D Modeling</button>
    <button class="tab-btn" data-category="art">Art</button>
  </nav>
  <div id="project-list" class="projects"></div>
`;

const projectContainer = document.querySelector<HTMLDivElement>('#project-list')!;
const buttons = document.querySelectorAll<HTMLButtonElement>('.tab-btn');

function renderProjects(category: string) {
  const filtered = projects.filter(p => p.category === category);
  
  projectContainer.innerHTML = filtered.map(p => {
    let mediaHTML = '';
    
    // Priority 1: Sketchfab (if it's a 3D category with an ID)
    if (p.category === '3d' && p.embedId) {
      mediaHTML = `
        <div class="sketchfab-embed">
          <iframe 
            title="${p.title}"
            src="https://sketchfab.com/models/${p.embedId}/embed?autostart=0" 
            allow="autoplay; fullscreen; xr-spatial-tracking">
          </iframe>
        </div>`;
    } 
    // Priority 2: Image (for 3D renders OR Art pieces)
    else if (p.image) {
      mediaHTML = `<img src="${p.image}" alt="${p.title}" class="project-img">`;
    }

    return `
      <div class="card">
        ${mediaHTML}
        <div class="card-content">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
        </div>
      </div>
    `;
  }).join('');
}

// Event Listeners
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.getAttribute('data-category') as any);
  });
});

renderProjects('coding');