import './style.css';

interface Project {
  title: string;
  category: 'coding' | '3d' | 'art';
  description: string;
  tags?: string[];
  link?: string;
  image?: string;   // For Art
  embedId?: string; // For Sketchfab
}

const projects: Project[] = [
  // Coding
  { 
    title: "Coop-erative Work VR", 
    category: 'coding', 
    tags: ["Unity", "C#", "Blender"],
    description: "Unity VR experience focused on user interaction, featuring custom Blender models and Agile development.", 
    link: "https://github.com/wavigoat" 
  },
  { 
    title: "IMDb Movie Finder", 
    category: 'coding', 
    tags: ["C++", "Data Structures", "Git"],
    description: "C++ application using advanced data structures and sorting algorithms to filter movie databases.", 
    link: "https://github.com/wavigoat" 
  },
  { 
    title: "FlavorShare Website", 
    category: 'coding', 
    tags: ["TypeScript", "CSS", "Agile"],
    description: "TypeScript prototype utilizing a backend database for recipe storage and search.", 
    link: "https://github.com/wavigoat" 
  },
  // --- 3D MODELING CATEGORY ---
  { 
    title: "Captain's Quarters", 
    category: '3d', 
    description: "Low-poly room model", 
    embedId: "84507935bf7d4f37b2727e96406e581b" 
  },
  { 
    title: "Pot and Lid", 
    category: '3d', 
    description: "3D Prop modeling study", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/112460960_3RQ8UFgRNrwyTSK.png" 
  },
  { 
    title: "Character Walk Cycle", 
    category: '3d', 
    description: "Commissioned Model", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/90714223_07s9F0LeZntyym5.gif" 
  },
  { 
    title: "Character Walk Cycle", 
    category: '3d', 
    description: "Looping 3D animation", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/90002584_qC4nG70GdmTBw9G.gif?1729200162" 
  },
  { 
    title: "Character Walk Cycle", 
    category: '3d', 
    description: "Model and animation for Coop-erative Work VR", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/112520383_Ukfxa3iyfdIznNZ.gif" 
  },
  { 
    title: "Character Walk Cycle", 
    category: '3d', 
    description: "Model and animation for Coop-erative Work VR", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/112520367_MxPh5wHyYwGwePZ.gif" 
  },

  // --- DIGITAL ART CATEGORY ---
  { 
    title: "Lighting Study", 
    category: 'art', 
    description: "", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/108588930_gB97ITZm0KdsDdW.png" 
  },
  { 
    title: "Card Illustration", 
    category: 'art', 
    description: "", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/107268651_TjO4G8kkg3HngRZ.png" 
  },
  { 
    title: "Digital Portrait", 
    category: 'art', 
    description: "", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/98011997_yN5H7i3aYFDOQR4.png" 
  },
  { 
    title: "Commissioned Work", 
    category: 'art', 
    description: "", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/92224893_oB6Wf30cGWjRyqS.png" 
  },
  { 
    title: "Card Illustration", 
    category: 'art', 
    description: "", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/81070675_XRgPsOAVixcsEAl.png" 
  },
  { 
    title: "Commissioned Work", 
    category: 'art', 
    description: "", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/91805981_a5JKgU2iLDDBwi8.png" 
  },
  { 
    title: "Commissioned Animation", 
    category: 'art', 
    description: "", 
    image: "https://file.garden/ZaN3pZzqMBk7KeIf/gal.gif" 
  },
  { 
    title: "Background and Lighting Study", 
    category: 'art', 
    description: "", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/112461414_uE5xeizWL8qxqBI.png" 
  },
  { 
    title: "Snack Study Infographic", 
    category: 'art', 
    description: "", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/112461479_ugJVDVXALKA3jCv.gif?1766954294" 
  },
  { 
    title: "Digital Portrait", 
    category: 'art', 
    description: "", 
    image: "https://f2.toyhou.se/file/f2-toyhou-se/images/79630294_aV49eWjSUXVjaBd.png" 
  }
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
           <div class="status-badge">
              <span class="pulse-icon"></span> Available for Summer 2026 Internships
            </div>
            <h3>Hello, my name is Kaitlyn Tran</h3>
            <p>
              I am a <strong>Computer Science & Economics student</strong> at the University of Florida with a passion for 
              Software Engineering and Game Development. 
            </p>
            <br>
            <p>
              By day, I engineer high-performance C++ applications and TypeScript prototypes. In my free time, 
              I am a <strong>freelance digital artist</strong> and game developer, 
              combining technical logic with creative 3D modeling in Unity and Blender to build immersive experiences.
            </p><br>
            <div class="tech-tags">
              <span>C++</span><span>TypeScript</span><span>Unity</span><span>Blender</span>
              <span>SFML</span><span>ARM</span><span>HTML</span><span>CSS</span><span>Python</span>
            </div>
            <button id="view-portfolio-btn" class="tab-btn active">View Portfolio</button>
            <button id="github-btn" class="tab-btn active">Github</button>
            <button id="linkedin-btn" class="tab-btn active">LinkedIn</button>
            <button id="email-btn" class="tab-btn active">Email</button>
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
  document.getElementById('github-btn')?.addEventListener('click', () => {
    window.open('https://github.com/wavigoat', '_blank');
  });

  document.getElementById('linkedin-btn')?.addEventListener('click', () => {
    window.open('https://linkedin.com/in/kaitlyn-tran', '_blank');
  });

  document.getElementById('email-btn')?.addEventListener('click', () => {
    window.location.href = 'mailto:kaitlyntran465@gmail.com';
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

  // REUSING INTRO STYLES: 'tech-tags' container and 'span' elements
  const tagHtml = p.tags 
    ? `<div class="tech-tags card-tags-spacing">
        ${p.tags.map(tag => `<span>${tag}</span>`).join('')}
       </div>` 
    : '';

  return `
    <div class="card" style="animation-delay: ${index * 0.05}s">
      ${mediaHTML}
      <div class="card-content">
        <h3>${p.title}</h3>
        ${tagHtml} 
        <p>${p.description}</p>
        ${p.link ? `<a href="${p.link}" target="_blank" class="tab-btn card-link">Source Code</a>` : ''}
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
function createStarField() {
  const container = document.createElement('div');
  container.id = 'star-container';
  document.body.appendChild(container);

  const starCount = 120; // Slightly more stars since they move slower

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    const rand = Math.random();
    const sizeValue = rand * 2 + 1; // Stars between 1px and 3px
    
    // SLOWER SPEEDS: Increased duration from 10-25s to 40-80s
    // Smaller stars (rand near 0) will take 80s (very slow)
    // Larger stars (rand near 1) will take 40s (slightly faster)
    const durationValue = 80 - (rand * 40); 
    const opacityValue = rand * 0.5 + 0.1;

    Object.assign(star.style, {
      width: `${sizeValue}px`,
      height: `${sizeValue}px`,
      left: `${Math.random() * 100}vw`,
      opacity: opacityValue.toString(),
      backgroundColor: 'white',
      // Adds a small glow so they stay visible against the pink gradient
      boxShadow: `0 0 ${sizeValue}px white`, 
      animationDuration: `${durationValue}s`,
      animationDelay: `${Math.random() * -80}s`
    });

    container.appendChild(star);
  }
}

// Call this once at the end of your script
createStarField();