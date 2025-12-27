import './style.css';

// Define a type for your projects
interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  { title: "E-commerce App", description: "Built with React", link: "#" },
  { title: "Weather Dashboard", description: "TypeScript & API integration", link: "#" },
];

const projectContainer = document.querySelector<HTMLDivElement>('#project-list');
const greeting = document.querySelector<HTMLHeadingElement>('#greeting');

if (greeting) {
  greeting.textContent = "Welcome to My Portfolio";
}

// Dynamically render projects
if (projectContainer) {
  projectContainer.innerHTML = projects.map(p => `
    <div class="card">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <a href="${p.link}">View Project</a>
    </div>
  `).join('');
}