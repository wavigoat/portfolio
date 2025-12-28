(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const g=[{title:"E-commerce App",category:"coding",description:"Built with React",link:"#"},{title:"Captain's Quarters",category:"3d",description:"Low-poly room model",embedId:"84507935bf7d4f37b2727e96406e581b"},{title:"Digital Portrait",category:"art",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/108588930_gB97ITZm0KdsDdW.png"},{title:"Card Illustration",category:"art",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/107268651_TjO4G8kkg3HngRZ.png"},{title:"Digital Portrait",category:"art",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/98011997_yN5H7i3aYFDOQR4.png"},{title:"Finished Commission",category:"art",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/92224893_oB6Wf30cGWjRyqS.png"},{title:"Card Illustration",category:"art",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/81070675_XRgPsOAVixcsEAl.png"},{title:"Digital Portrait",category:"3d",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/90714223_07s9F0LeZntyym5.gif"},{title:"Digital Portrait",category:"3d",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/90002584_qC4nG70GdmTBw9G.gif?1729200162"},{title:"Digital Portrait",category:"3d",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/112460960_3RQ8UFgRNrwyTSK.png"},{title:"Digital Portrait",category:"art",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/91805981_a5JKgU2iLDDBwi8.png"},{title:"Digital Portrait",category:"art",description:"Painted in Procreate",image:"https://file.garden/ZaN3pZzqMBk7KeIf/gal.gif"},{title:"Digital Portrait",category:"art",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/112461414_uE5xeizWL8qxqBI.png"},{title:"Digital Portrait",category:"art",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/112461479_ugJVDVXALKA3jCv.gif?1766954294"},{title:"Digital Portrait",category:"art",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/79630294_aV49eWjSUXVjaBd.png"}],d=document.querySelector("#root");d.innerHTML=`
  <h1 id="greeting">My Portfolio</h1>
  <nav class="tabs">
    <button class="tab-btn active" data-category="coding">Coding</button>
    <button class="tab-btn" data-category="3d">3D Modeling</button>
    <button class="tab-btn" data-category="art">Art</button>
  </nav>
  <div id="project-list" class="projects"></div>
`;const n=document.querySelector("#project-list"),l=document.querySelectorAll(".tab-btn");function u(e){return e.map(i=>({value:i,sort:Math.random()})).sort((i,r)=>i.sort-r.sort).map(({value:i})=>i)}function f(){d.innerHTML=`
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
  `,document.getElementById("view-portfolio-btn")?.addEventListener("click",()=>{p()})}function p(){d.innerHTML=`
    <div class="portfolio-container">
      <button id="back-to-intro" class="back-link">← Back</button>
      <nav class="tabs">
        <button class="tab-btn" data-category="coding">Coding</button>
        <button class="tab-btn" data-category="3d">3D Modeling</button>
        <button class="tab-btn" data-category="art">Art</button>
      </nav>
      <div id="project-list" class="projects"></div>
    </div>
  `;const e=document.querySelectorAll(".tab-btn");e.forEach(r=>{r.addEventListener("click",()=>{e.forEach(a=>a.classList.remove("active")),r.classList.add("active"),y(r.getAttribute("data-category"))})}),document.getElementById("back-to-intro")?.addEventListener("click",f),document.querySelector('.tab-btn[data-category="coding"]')?.click()}function y(e){const i=document.getElementById("project-list");i.innerHTML="";const r=g.filter(t=>t.category===e),a=u(r);if(e==="coding")i.className="projects list-layout",i.innerHTML=a.map((t,o)=>c(t,o)).join("");else{i.className="projects grid-layout";const t=["","",""];a.forEach((o,s)=>{t[s%3]+=c(o,s)}),i.innerHTML=t.map(o=>`<div class="project-column">${o}</div>`).join("")}}f();function m(e){n.innerHTML="";const i=g.filter(a=>a.category===e),r=u(i);if(e==="coding")n.className="projects list-layout",n.innerHTML=r.map((a,t)=>c(a,t)).join("");else{n.className="projects grid-layout";const a=["","",""];r.forEach((t,o)=>{const s=o%3;a[s]+=c(t,o)}),n.innerHTML=a.map(t=>`<div class="project-column">${t}</div>`).join("")}}function c(e,i){let r="";return e.category==="3d"&&e.embedId?r=`
      <div class="sketchfab-embed">
        <iframe src="https://sketchfab.com/models/${e.embedId}/embed?autostart=0"></iframe>
      </div>`:e.image&&(r=`<img src="${e.image}" alt="${e.title}" class="project-img">`),`
    <div class="card" style="animation-delay: ${i*.05}s">
      ${r}
      <div class="card-content">
        <h3>${e.title}</h3>
        <p>${e.description}</p>
      </div>
    </div>
  `}l.forEach(e=>{e.addEventListener("click",()=>{l.forEach(i=>i.classList.remove("active")),e.classList.add("active"),m(e.getAttribute("data-category"))})});m("coding");
