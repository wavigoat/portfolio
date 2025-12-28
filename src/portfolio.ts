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
    title: "Card Illustration", 
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
    title: "Finished Commission", 
    category: 'art', 
    description: "Painted in Procreate", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/92224893_oB6Wf30cGWjRyqS.png" // Replace with your image path
  },
  { 
    title: "Card Illustration", 
    category: 'art', 
    description: "Painted in Procreate", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/81070675_XRgPsOAVixcsEAl.png" // Replace with your image path
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
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/112460960_3RQ8UFgRNrwyTSK.png" // Replace with your image path
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
  { 
    title: "Digital Portrait", 
    category: 'art', 
    description: "Painted in Procreate", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/112461414_uE5xeizWL8qxqBI.png" // Replace with your image path
  },
  { 
    title: "Digital Portrait", 
    category: 'art', 
    description: "Painted in Procreate", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/112461479_ugJVDVXALKA3jCv.gif?1766954294" // Replace with your image path
  },
  { 
    title: "Digital Portrait", 
    category: 'art', 
    description: "Painted in Procreate", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/79630294_aV49eWjSUXVjaBd.png" // Replace with your image path
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

function shuffleArray<T>(array: T[]): T[] {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

// 1. Function to render the Intro Page
function renderIntro() {
  root.innerHTML = `
    <div class="intro-wrapper">
      <div class="card intro-card">
        <div class="intro-layout">
          <div class="card-content">
            <h3>Hi!</h3>
            <p>Creative Developer & 3D Artist specializing in interactive experiences.</p><br>
            <button id="view-portfolio-btn" class="tab-btn active">View Portfolio</button>
          </div>
          <div class="intro-media">
            <img src="https://f2.toyhou.se/file/f2-toyhou-se/images/112461414_uE5xeizWL8qxqBI.png" class="project-img">
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('view-portfolio-btn')?.addEventListener('click', () => {
    renderPortfolioPage();
  });
}

// 2. Function to render the Portfolio Page Structure
function renderPortfolioPage() {
  root.innerHTML = `
    <div class="portfolio-container">
      <button id="back-to-intro" class="back-link">← Back</button>
      <nav class="tabs">
        <button class="tab-btn" data-category="coding">Coding</button>
        <button class="tab-btn" data-category="3d">3D Modeling</button>
        <button class="tab-btn" data-category="art">Art</button>
      </nav>
      <div id="project-list" class="projects"></div>
    </div>
  `;

  // Attach tab listeners
  const buttons = document.querySelectorAll<HTMLButtonElement>('.tab-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjectGrid(btn.getAttribute('data-category')!);
    });
  });

  // Back button listener
  document.getElementById('back-to-intro')?.addEventListener('click', renderIntro);

  // Initial render of first category
  const firstTab = document.querySelector<HTMLButtonElement>('.tab-btn[data-category="coding"]');
  firstTab?.click();
}

// 3. Your existing Grid Logic (Modified for the Column Stacks)
function renderProjectGrid(category: string) {
  const container = document.getElementById('project-list')!;
  container.innerHTML = '';
  
  const filtered = projects.filter(p => p.category === category);
  const shuffled = shuffleArray(filtered);

  if (category === 'coding') {
    container.className = 'projects list-layout';
    container.innerHTML = shuffled.map((p, i) => createCardHTML(p, i)).join('');
  } else {
    container.className = 'projects grid-layout';
    const columns = ['', '', ''];
    shuffled.forEach((p, i) => { columns[i % 3] += createCardHTML(p, i); });
    container.innerHTML = columns.map(c => `<div class="project-column">${c}</div>`).join('');
  }
}

// Start the app
renderIntro();

function renderProjects(category: string) {
  // 1. Reset container
  projectContainer.innerHTML = '';
  
  const filtered = projects.filter(p => p.category === category);
  const shuffled = shuffleArray(filtered);

  if (category === 'coding') {
    // Single column list view
    projectContainer.className = 'projects list-layout';
    projectContainer.innerHTML = shuffled.map((p, i) => createCardHTML(p, i)).join('');
  } else {
    // Grid view: Manual 3-column distribution
    projectContainer.className = 'projects grid-layout';
    
    // Initialize 3 empty strings (one for each column)
    const columns = ['', '', '']; 
    
    shuffled.forEach((p, index) => {
      // This sends project 0 to col 0, project 1 to col 1, project 2 to col 2, project 3 to col 0...
      const colIndex = index % 3;
      columns[colIndex] += createCardHTML(p, index);
    });

    // Wrap the buckets into column divs
    projectContainer.innerHTML = columns
      .map(colContent => `<div class="project-column">${colContent}</div>`)
      .join('');
  }
}

// Helper function to keep code clean
function createCardHTML(p: Project, index: number): string {
  let mediaHTML = '';
  
  if (p.category === '3d' && p.embedId) {
    mediaHTML = `
      <div class="sketchfab-embed">
        <iframe src="https://sketchfab.com/models/${p.embedId}/embed?autostart=0"></iframe>
      </div>`;
  } else if (p.image) {
    mediaHTML = `<img src="${p.image}" alt="${p.title}" class="project-img">`;
  }

  return `
    <div class="card" style="animation-delay: ${index * 0.05}s">
      ${mediaHTML}
      <div class="card-content">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
      </div>
    </div>
  `;
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