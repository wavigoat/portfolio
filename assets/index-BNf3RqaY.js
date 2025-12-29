(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();const g=[{title:"Coop-erative Work VR",category:"coding",tags:["Unity","C#","Blender"],description:"Unity VR experience focused on user interaction, featuring custom Blender models and Agile development.",link:"https://github.com/wavigoat"},{title:"IMDb Movie Finder",category:"coding",tags:["C++","Data Structures","Git"],description:"C++ application using advanced data structures and sorting algorithms to filter movie databases.",link:"https://github.com/wavigoat"},{title:"FlavorShare Website",category:"coding",tags:["TypeScript","CSS","Agile"],description:"TypeScript prototype utilizing a backend database for recipe storage and search.",link:"https://github.com/wavigoat"},{title:"Captain's Quarters",category:"3d",description:"Low-poly room model",embedId:"84507935bf7d4f37b2727e96406e581b"},{title:"Cyberpunk Asset",category:"3d",description:"3D Prop modeling study",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/112460960_3RQ8UFgRNrwyTSK.png"},{title:"Animated Character Study",category:"3d",description:"3D animation/GIF experiment",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/90714223_07s9F0LeZntyym5.gif"},{title:"Character Walk Cycle",category:"3d",description:"Looping 3D animation",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/90002584_qC4nG70GdmTBw9G.gif?1729200162"},{title:"Digital Portrait",category:"art",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/108588930_gB97ITZm0KdsDdW.png"},{title:"Card Illustration",category:"art",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/107268651_TjO4G8kkg3HngRZ.png"},{title:"Digital Portrait",category:"art",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/98011997_yN5H7i3aYFDOQR4.png"},{title:"Finished Commission",category:"art",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/92224893_oB6Wf30cGWjRyqS.png"},{title:"Card Illustration",category:"art",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/81070675_XRgPsOAVixcsEAl.png"},{title:"Digital Portrait",category:"art",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/91805981_a5JKgU2iLDDBwi8.png"},{title:"Galactic Portrait",category:"art",description:"Painted in Procreate",image:"https://file.garden/ZaN3pZzqMBk7KeIf/gal.gif"},{title:"Digital Portrait",category:"art",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/112461414_uE5xeizWL8qxqBI.png"},{title:"Animated Portrait",category:"art",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/112461479_ugJVDVXALKA3jCv.gif?1766954294"},{title:"Digital Portrait",category:"art",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/79630294_aV49eWjSUXVjaBd.png"}],d=document.querySelector("#root");d.innerHTML=`
  <h1 id="greeting">My Portfolio</h1>
  <nav class="tabs">
    <button class="tab-btn active" data-category="coding">Coding</button>
    <button class="tab-btn" data-category="3d">3D Modeling</button>
    <button class="tab-btn" data-category="art">Art</button>
  </nav>
  <div id="project-list" class="projects"></div>
`;const s=document.querySelector("#project-list"),l=document.querySelectorAll(".tab-btn");function u(e){return e.map(i=>({value:i,sort:Math.random()})).sort((i,n)=>i.sort-n.sort).map(({value:i})=>i)}function p(){d.innerHTML=`
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
  `,document.getElementById("view-portfolio-btn")?.addEventListener("click",()=>{y()}),document.getElementById("github-btn")?.addEventListener("click",()=>{window.open("https://github.com/wavigoat","_blank")}),document.getElementById("linkedin-btn")?.addEventListener("click",()=>{window.open("https://linkedin.com/in/kaitlyn-tran","_blank")}),document.getElementById("email-btn")?.addEventListener("click",()=>{window.location.href="mailto:kaitlyntran465@gmail.com"})}function y(){d.innerHTML=`
    <div class="portfolio-container">
      <button id="back-to-intro" class="back-link">← Back</button>
      <nav class="tabs">
        <button class="tab-btn" data-category="coding">Coding</button>
        <button class="tab-btn" data-category="3d">3D Modeling</button>
        <button class="tab-btn" data-category="art">Art</button>
      </nav>
      <div id="project-list" class="projects"></div>
    </div>
  `;const e=document.querySelectorAll(".tab-btn");e.forEach(n=>{n.addEventListener("click",()=>{e.forEach(o=>o.classList.remove("active")),n.classList.add("active"),h(n.getAttribute("data-category"))})}),document.getElementById("back-to-intro")?.addEventListener("click",p),document.querySelector('.tab-btn[data-category="coding"]')?.click()}function h(e){const i=document.getElementById("project-list");i.innerHTML="";const n=g.filter(t=>t.category===e),o=u(n);if(e==="coding")i.className="projects list-layout",i.innerHTML=o.map((t,a)=>c(t,a)).join("");else{i.className="projects grid-layout";const t=["","",""];o.forEach((a,r)=>{t[r%3]+=c(a,r)}),i.innerHTML=t.map(a=>`<div class="project-column">${a}</div>`).join("")}}p();function m(e){s.innerHTML="";const i=g.filter(o=>o.category===e),n=u(i);if(e==="coding")s.className="projects list-layout",s.innerHTML=n.map((o,t)=>c(o,t)).join("");else{s.className="projects grid-layout";const o=["","",""];n.forEach((t,a)=>{const r=a%3;o[r]+=c(t,a)}),s.innerHTML=o.map(t=>`<div class="project-column">${t}</div>`).join("")}}function c(e,i){let n="";e.category==="3d"&&e.embedId?n=`
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
  `}l.forEach(e=>{e.addEventListener("click",()=>{l.forEach(i=>i.classList.remove("active")),e.classList.add("active"),m(e.getAttribute("data-category"))})});m("coding");function b(){const e=document.createElement("div");e.id="star-container",document.body.appendChild(e);const i=120;for(let n=0;n<i;n++){const o=document.createElement("div");o.className="star";const t=Math.random(),a=t*2+1,r=80-t*40,f=t*.5+.1;Object.assign(o.style,{width:`${a}px`,height:`${a}px`,left:`${Math.random()*100}vw`,opacity:f.toString(),backgroundColor:"white",boxShadow:`0 0 ${a}px white`,animationDuration:`${r}s`,animationDelay:`${Math.random()*-80}s`}),e.appendChild(o)}}b();
