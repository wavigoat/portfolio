(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();const g=[{title:"Airship Architect",category:"coding",tags:["Unity","C#","Game Jam"],description:"A cozy puzzle game where players design and build airships. Worked on technical UI art, concept art, UI animations, and UI mechanics, including character designs of the protagonist as well as level seletion art. Developed in a 48-hour sprint for the DW Game Jam Spring 2026.",link:"https://github.com/EmeraldSnow29/DW-Game-Jam-Spring-2026"},{title:"Coop-erative Work VR",category:"coding",tags:["Unity","C#","Blender","Agile"],description:"A farming simulator VR experience where players manage a farm, care for chickens, and fish. Features a dynamic economy system allowing players to sell goods for upgrades. Developed custom 3D models and animations in Blender, managed via Agile sprints.",link:"https://github.com/wavigoat/Coop-erative-work"},{title:"Horse Racing Simulator",category:"coding",tags:["HTML","CSS","JavaScript"],description:"A horse racing simulator web game where players can customize stats, horses, and tracks to race against opponents, with custom artwork and CSS animations. Can be utilized as a random name picker.",link:"https://github.com/wavigoat/horse-race-sim"},{title:"Webby’s Internet Adventure",category:"coding",tags:["Unity","C#","Pixel Art","Level Design"],description:"A 2D platformer built in Unity featuring original pixel art assets and fluid gameplay mechanics. Focused on player engagement through intricate level design and polished character controllers.",link:"https://github.com/wavigoat/webby-adventure"},{title:"FlavorShare Platform",category:"coding",tags:["TypeScript","React","Node.js","Agile"],description:"A recipe-sharing prototype built with React and TypeScript. Implemented a backend database for storage and search functionality. Collaborated with a cross-functional team using Jira and Agile sprints to iterate on the UI/UX.",link:"https://github.com/wavigoat/fullstack-kitchen"},{title:"IMDb Movie Analytics Engine",category:"coding",tags:["C++","Data Structures","Algorithms","Git"],description:"High-performance C++ program for parsing and filtering massive IMDb datasets. Implemented custom sorting algorithms and optimized data structures (like Hash Maps/Trees) to filter by genre, rating, and vote count.",link:"https://github.com/wavigoat/IMDb-Movie-Finder"},{title:"Interactive Personal Portfolio",category:"coding",tags:["TypeScript","HTML","CSS","Vite","React"],description:"A custom-built, responsive portfolio (this site!) featuring state-based page transitions and an interdisciplinary UI design showcasing the intersection of engineering and art.",link:"https://github.com/wavigoat/portfolio"},{title:"Captain's Quarters",category:"3d",description:"Low-poly room model",embedId:"84507935bf7d4f37b2727e96406e581b"},{title:"Pot and Lid",category:"3d",description:"3D Prop modeling study",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/112460960_3RQ8UFgRNrwyTSK.png"},{title:"Character Walk Cycle",category:"3d",description:"Commissioned Model",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/90714223_07s9F0LeZntyym5.gif"},{title:"Character Walk Cycle",category:"3d",description:"Looping 3D animation",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/90002584_qC4nG70GdmTBw9G.gif?1729200162"},{title:"Character Walk Cycle",category:"3d",description:"Model and animation for Coop-erative Work VR",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/112520383_Ukfxa3iyfdIznNZ.gif"},{title:"Character Walk Cycle",category:"3d",description:"Model and animation for Coop-erative Work VR",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/112520367_MxPh5wHyYwGwePZ.gif"},{title:"Stitched Priestess",category:"art",description:"Original character design and lighting study, with a heavy focus on value",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/108588930_gB97ITZm0KdsDdW.png"},{title:"Character Design and Promotional Materials for Swampcon 2026",category:"art",description:"Character design and promotional materials for Swampcon 2026 at the University of Florida",image:"https://file.garden/ZaN3pZzqMBk7KeIf/t3.png"},{title:"Dance, Dance, Revolution",category:"art",description:"Original character design and illustration for a music themed card project",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/107268651_TjO4G8kkg3HngRZ.png"},{title:"Mascot Character Design and Turnaround",category:"art",description:"For the AnimeEffects mascot contest, a character design and turnaround sheet focused on integrating the UI and brand elements into a cohesive character design",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/112808351_NN1xDjtcagBqta3.png"},{title:"Queen of Clovers",category:"art",description:"Illustration created for a card game project, in which every card in a suite is drawn by a different artist.",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/81070675_XRgPsOAVixcsEAl.png"},{title:"Chimera-Letia",category:"art",description:"A commissioned character design and illustration, following client specifications for a character with a mix of human and animal features, with a focus on dynamic posing and lighting",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/91805981_a5JKgU2iLDDBwi8.png"},{title:"Goodbye Wave",category:"art",description:"Simple looping animation using tweening to create a smooth waving motion.",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/116137260_2r0CIHSH97Ix9LJ.gif"},{title:"Background and Lighting Study",category:"art",description:"A study focusing on atmosphere, background illustration, and lighting",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/112461414_uE5xeizWL8qxqBI.png"},{title:"Snack Study Infographic",category:"art",description:"An infographic created to visualize the results of a snack survey, using a combination of hand-drawn elements and digital design to create an engaging and informative visual representation of the data.",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/112461479_ugJVDVXALKA3jCv.gif?1766954294"},{title:"Office Dinner",category:"art",description:"Original character designs and illustration with a focus on scene composition and color.",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/79630294_aV49eWjSUXVjaBd.png"},{title:"Digital Horror",category:"art",description:"An illustration focusing on composition, atmosphere, and color to create a sense of unease.",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/116137711_nhxbZ0xMPYBSbw9.png"},{title:"Two-Faced Serpents",category:"art",description:"Commissioned artwork for Horrors and Hellscapes Monster of the Week campaign, with a focus on visually striking black and white composition and detailed linework.",image:"../images/HnH1.png"},{title:"Trials of the Fey",category:"art",description:"Commissioned artwork for Horrors and Hellscapes Monster of the Week campaign, with a focus on visually striking black and white composition and ink-like textures.",image:"../images/HnH2.png"},{title:"Ledyba",category:"art",description:"Fanart of the Pokémon Ledyba, focusing on colors, minimalism, and simplicity to create an appealing piece.",image:"../images/HnH2.png"}],l=document.querySelector("#root");l.innerHTML=`
  <h1 id="greeting">My Portfolio</h1>
  <nav class="tabs">
    <button class="tab-btn active" data-category="coding">Coding</button>
    <button class="tab-btn" data-category="3d">3D Modeling</button>
    <button class="tab-btn" data-category="art">Art</button>
  </nav>
  <div id="project-list" class="projects"></div>
`;const r=document.querySelector("#project-list"),d=document.querySelectorAll(".tab-btn");function m(e){return e.map(a=>({value:a,sort:Math.random()})).sort((a,o)=>a.sort-o.sort).map(({value:a})=>a)}function p(){l.innerHTML=`
    <div class="intro-wrapper">
      <div class="card intro-card">
        <div class="intro-layout">
          <div class="card-content">
           <div class="status-badge">
              <span class="pulse-icon"></span> Available for Summer 2026 Internships, currently working at Chromatic Games
            </div>
            <h3>Hello, my name is Kaitlyn Tran!</h3>
            <p>
              I am a Computer Science and Economics student at the University of Florida. As a four-time Dean’s List scholar in the Herbert Wertheim College of Engineering, I combine academic excellence with a hands-on approach to building high-performance technical systems.
            </p>
            <br>
            <p>
              My technical foundation spans from low-level C++ systems and ARM assembly to high-level TypeScript prototypes, and I have experience working with data structures and time complexity. My background in Economics provides a unique quantitative lens, allowing me to approach software optimization and resource management with analytical precision.
            </p>
            <br>
            <p>
              Beyond pure code, I am a creative-first, cooperative developer. I have extensive experience collaborating in Agile environments, utilizing Jira to manage sprints and streamline workflows. Whether as a freelance digital artist or a software engineer, I bridge the gap between technical logic and visual storytelling.
            </p>
            <br>
            <p>
              I specialize in 3D modeling with Blender and interactive system design in Unity, driven by the goal of creating immersive, polished digital experiences that are as functional as they are beautiful.
            </p><br>
            <div class="tech-tags">
              <span>C++</span><span>TypeScript</span><span>Unity</span><span>Blender</span>
              <span>SFML</span><span>ARM</span><span>HTML</span><span>CSS</span><span>Python</span><span>React</span>
            </div>
            <button id="view-portfolio-btn" class="tab-btn active">View Portfolio</button>
            <button id="github-btn" class="tab-btn active">Github</button>
            <button id="linkedin-btn" class="tab-btn active">LinkedIn</button>
            <button id="email-btn" class="tab-btn active">Email</button>
          </div>
          <div class="intro-media">
            <img src="https://file.garden/ZaN3pZzqMBk7KeIf/IMG_7452.jpg" class="project-img">
          </div>
          
        </div>
      </div>
    </div>
  `,document.getElementById("view-portfolio-btn")?.addEventListener("click",()=>{f()}),document.getElementById("github-btn")?.addEventListener("click",()=>{window.open("https://github.com/wavigoat","_blank")}),document.getElementById("linkedin-btn")?.addEventListener("click",()=>{window.open("https://linkedin.com/in/kaitlyn-tran","_blank")}),document.getElementById("email-btn")?.addEventListener("click",()=>{window.location.href="mailto:kaitlyntran465@gmail.com"})}function f(){l.innerHTML=`
    <div class="portfolio-container">
      <button id="back-to-intro" class="back-link">← Back</button>
      <nav class="tabs">
        <button class="tab-btn" data-category="coding">Coding</button>
        <button class="tab-btn" data-category="3d">3D Modeling</button>
        <button class="tab-btn" data-category="art">Art</button>
      </nav>
      <div id="project-list" class="projects"></div>
    </div>
  `;const e=document.querySelectorAll(".tab-btn");e.forEach(o=>{o.addEventListener("click",()=>{e.forEach(n=>n.classList.remove("active")),o.classList.add("active"),y(o.getAttribute("data-category"))})}),document.getElementById("back-to-intro")?.addEventListener("click",p),document.querySelector('.tab-btn[data-category="coding"]')?.click()}function y(e){const a=document.getElementById("project-list");a.innerHTML="";const o=g.filter(t=>t.category===e),n=m(o);if(e==="coding")a.className="projects list-layout",a.innerHTML=n.map((t,i)=>c(t,i)).join("");else{a.className="projects grid-layout";const t=["","",""];n.forEach((i,s)=>{t[s%3]+=c(i,s)}),a.innerHTML=t.map(i=>`<div class="project-column">${i}</div>`).join("")}}p();function u(e){r.innerHTML="";const a=g.filter(n=>n.category===e),o=m(a);if(e==="coding")r.className="projects list-layout",r.innerHTML=o.map((n,t)=>c(n,t)).join("");else{r.className="projects grid-layout";const n=["","",""];o.forEach((t,i)=>{const s=i%3;n[s]+=c(t,i)}),r.innerHTML=n.map(t=>`<div class="project-column">${t}</div>`).join("")}}function c(e,a){let o="";e.category==="3d"&&e.embedId?o=`
      <div class="sketchfab-embed">
        <iframe src="https://sketchfab.com/models/${e.embedId}/embed?autostart=0"></iframe>
      </div>`:e.image&&(o=`<img src="${e.image}" alt="${e.title}" class="project-img">`);const n=e.tags?`<div class="tech-tags card-tags-spacing">
        ${e.tags.map(t=>`<span>${t}</span>`).join("")}
       </div>`:"";return`
    <div class="card" style="animation-delay: ${a*.05}s">
      ${o}
      <div class="card-content">
        <h3>${e.title}</h3>
        ${n} 
        <p>${e.description}</p>
        ${e.link?`<a href="${e.link}" target="_blank" class="tab-btn card-link">Source Code</a>`:""}
      </div>
    </div>
  `}d.forEach(e=>{e.addEventListener("click",()=>{d.forEach(a=>a.classList.remove("active")),e.classList.add("active"),u(e.getAttribute("data-category"))})});u("coding");function b(){const e=document.createElement("div");e.id="star-container",document.body.appendChild(e);const a=120;for(let o=0;o<a;o++){const n=document.createElement("div");n.className="star";const t=Math.random(),i=t*2+1,s=80-t*40,h=t*.5+.1;Object.assign(n.style,{width:`${i}px`,height:`${i}px`,left:`${Math.random()*100}vw`,opacity:h.toString(),backgroundColor:"white",boxShadow:`0 0 ${i}px white`,animationDuration:`${s}s`,animationDelay:`${Math.random()*-80}s`}),e.appendChild(n)}}b();
