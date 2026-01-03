(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();const g=[{title:"Coop-erative Work VR",category:"coding",tags:["Unity","C#","Blender","Agile"],description:"A farming simulator VR experience where players manage a farm, care for chickens, and fish. Features a dynamic economy system allowing players to sell goods for upgrades. Developed custom 3D models and animations in Blender, managed via Agile sprints.",link:"https://github.com/wavigoat/Coop-erative-work"},{title:"Webby’s Internet Adventure",category:"coding",tags:["Unity","C#","Pixel Art","Level Design"],description:"A 2D platformer built in Unity featuring original pixel art assets and fluid gameplay mechanics. Focused on player engagement through intricate level design and polished character controllers.",link:"https://github.com/wavigoat/webby-adventure"},{title:"FlavorShare Platform",category:"coding",tags:["TypeScript","React","Node.js","Agile"],description:"A recipe-sharing prototype built with React and TypeScript. Implemented a backend database for storage and search functionality. Collaborated with a cross-functional team using Jira and Agile sprints to iterate on the UI/UX.",link:"https://github.com/wavigoat/fullstack-kitchen"},{title:"IMDb Movie Analytics Engine",category:"coding",tags:["C++","Data Structures","Algorithms","Git"],description:"High-performance C++ program for parsing and filtering massive IMDb datasets. Implemented custom sorting algorithms and optimized data structures (like Hash Maps/Trees) to filter by genre, rating, and vote count.",link:"https://github.com/wavigoat/IMDb-Movie-Finder"},{title:"Interactive Personal Portfolio",category:"coding",tags:["TypeScript","HTML","CSS","Vite","React"],description:"A custom-built, responsive portfolio (this site!) featuring state-based page transitions and an interdisciplinary UI design showcasing the intersection of engineering and art.",link:"https://github.com/wavigoat/portfolio"},{title:"Captain's Quarters",category:"3d",description:"Low-poly room model",embedId:"84507935bf7d4f37b2727e96406e581b"},{title:"Pot and Lid",category:"3d",description:"3D Prop modeling study",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/112460960_3RQ8UFgRNrwyTSK.png"},{title:"Character Walk Cycle",category:"3d",description:"Commissioned Model",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/90714223_07s9F0LeZntyym5.gif"},{title:"Character Walk Cycle",category:"3d",description:"Looping 3D animation",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/90002584_qC4nG70GdmTBw9G.gif?1729200162"},{title:"Character Walk Cycle",category:"3d",description:"Model and animation for Coop-erative Work VR",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/112520383_Ukfxa3iyfdIznNZ.gif"},{title:"Character Walk Cycle",category:"3d",description:"Model and animation for Coop-erative Work VR",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/112520367_MxPh5wHyYwGwePZ.gif"},{title:"Lighting Study",category:"art",description:"",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/108588930_gB97ITZm0KdsDdW.png"},{title:"Card Illustration",category:"art",description:"",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/107268651_TjO4G8kkg3HngRZ.png"},{title:"Mascot Character Design and Turnaround",category:"art",description:"",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/112808351_NN1xDjtcagBqta3.png"},{title:"Commissioned Character Design and Illustration",category:"art",description:"",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/92224893_oB6Wf30cGWjRyqS.png"},{title:"Card Illustration",category:"art",description:"",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/81070675_XRgPsOAVixcsEAl.png"},{title:"Commissioned Character Design and Illustration",category:"art",description:"",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/91805981_a5JKgU2iLDDBwi8.png"},{title:"Commissioned Animation",category:"art",description:"",image:"https://file.garden/ZaN3pZzqMBk7KeIf/gal.gif"},{title:"Background and Lighting Study",category:"art",description:"",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/112461414_uE5xeizWL8qxqBI.png"},{title:"Snack Study Infographic",category:"art",description:"",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/112461479_ugJVDVXALKA3jCv.gif?1766954294"},{title:"Digital Portrait",category:"art",description:"",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/79630294_aV49eWjSUXVjaBd.png"}],l=document.querySelector("#root");l.innerHTML=`
  <h1 id="greeting">My Portfolio</h1>
  <nav class="tabs">
    <button class="tab-btn active" data-category="coding">Coding</button>
    <button class="tab-btn" data-category="3d">3D Modeling</button>
    <button class="tab-btn" data-category="art">Art</button>
  </nav>
  <div id="project-list" class="projects"></div>
`;const r=document.querySelector("#project-list"),d=document.querySelectorAll(".tab-btn");function p(e){return e.map(i=>({value:i,sort:Math.random()})).sort((i,n)=>i.sort-n.sort).map(({value:i})=>i)}function u(){l.innerHTML=`
    <div class="intro-wrapper">
      <div class="card intro-card">
        <div class="intro-layout">
          <div class="card-content">
           <div class="status-badge">
              <span class="pulse-icon"></span> Available for Summer 2026 Internships
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
  `,document.getElementById("view-portfolio-btn")?.addEventListener("click",()=>{h()}),document.getElementById("github-btn")?.addEventListener("click",()=>{window.open("https://github.com/wavigoat","_blank")}),document.getElementById("linkedin-btn")?.addEventListener("click",()=>{window.open("https://linkedin.com/in/kaitlyn-tran","_blank")}),document.getElementById("email-btn")?.addEventListener("click",()=>{window.location.href="mailto:kaitlyntran465@gmail.com"})}function h(){l.innerHTML=`
    <div class="portfolio-container">
      <button id="back-to-intro" class="back-link">← Back</button>
      <nav class="tabs">
        <button class="tab-btn" data-category="coding">Coding</button>
        <button class="tab-btn" data-category="3d">3D Modeling</button>
        <button class="tab-btn" data-category="art">Art</button>
      </nav>
      <div id="project-list" class="projects"></div>
    </div>
  `;const e=document.querySelectorAll(".tab-btn");e.forEach(n=>{n.addEventListener("click",()=>{e.forEach(o=>o.classList.remove("active")),n.classList.add("active"),y(n.getAttribute("data-category"))})}),document.getElementById("back-to-intro")?.addEventListener("click",u),document.querySelector('.tab-btn[data-category="coding"]')?.click()}function y(e){const i=document.getElementById("project-list");i.innerHTML="";const n=g.filter(t=>t.category===e),o=p(n);if(e==="coding")i.className="projects list-layout",i.innerHTML=o.map((t,a)=>c(t,a)).join("");else{i.className="projects grid-layout";const t=["","",""];o.forEach((a,s)=>{t[s%3]+=c(a,s)}),i.innerHTML=t.map(a=>`<div class="project-column">${a}</div>`).join("")}}u();function m(e){r.innerHTML="";const i=g.filter(o=>o.category===e),n=p(i);if(e==="coding")r.className="projects list-layout",r.innerHTML=n.map((o,t)=>c(o,t)).join("");else{r.className="projects grid-layout";const o=["","",""];n.forEach((t,a)=>{const s=a%3;o[s]+=c(t,a)}),r.innerHTML=o.map(t=>`<div class="project-column">${t}</div>`).join("")}}function c(e,i){let n="";e.category==="3d"&&e.embedId?n=`
      <div class="sketchfab-embed">
        <iframe src="https://sketchfab.com/models/${e.embedId}/embed?autostart=0"></iframe>
      </div>`:e.image&&(n=`<img src="${e.image}" alt="${e.title}" class="project-img">`);const o=e.tags?`<div class="tech-tags card-tags-spacing">
        ${e.tags.map(t=>`<span>${t}</span>`).join("")}
       </div>`:"";return`
    <div class="card" style="animation-delay: ${i*.05}s">
      ${n}
      <div class="card-content">
        <h3>${e.title}</h3>
        ${o} 
        <p>${e.description}</p>
        ${e.link?`<a href="${e.link}" target="_blank" class="tab-btn card-link">Source Code</a>`:""}
      </div>
    </div>
  `}d.forEach(e=>{e.addEventListener("click",()=>{d.forEach(i=>i.classList.remove("active")),e.classList.add("active"),m(e.getAttribute("data-category"))})});m("coding");function b(){const e=document.createElement("div");e.id="star-container",document.body.appendChild(e);const i=120;for(let n=0;n<i;n++){const o=document.createElement("div");o.className="star";const t=Math.random(),a=t*2+1,s=80-t*40,f=t*.5+.1;Object.assign(o.style,{width:`${a}px`,height:`${a}px`,left:`${Math.random()*100}vw`,opacity:f.toString(),backgroundColor:"white",boxShadow:`0 0 ${a}px white`,animationDuration:`${s}s`,animationDelay:`${Math.random()*-80}s`}),e.appendChild(o)}}b();
