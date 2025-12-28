(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}})();const l=[{title:"E-commerce App",category:"coding",description:"Built with React",link:"#"},{title:"Captain's Quarters",category:"3d",description:"Low-poly room model",embedId:"84507935bf7d4f37b2727e96406e581b"},{title:"Digital Portrait",category:"art",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/108588930_gB97ITZm0KdsDdW.png"},{title:"Digital Portrait",category:"art",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/107268651_TjO4G8kkg3HngRZ.png"},{title:"Digital Portrait",category:"art",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/98011997_yN5H7i3aYFDOQR4.png"},{title:"Digital Portrait",category:"art",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/92224893_oB6Wf30cGWjRyqS.png"},{title:"Digital Portrait",category:"art",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/92224893_oB6Wf30cGWjRyqS.png"},{title:"Digital Portrait",category:"3d",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/90714223_07s9F0LeZntyym5.gif"},{title:"Digital Portrait",category:"3d",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/90002584_qC4nG70GdmTBw9G.gif?1729200162"},{title:"Digital Portrait",category:"3d",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/90714223_07s9F0LeZntyym5.gif"},{title:"Digital Portrait",category:"art",description:"Painted in Procreate",image:"https://f2.toyhou.se/file/f2-toyhou-se/images/91805981_a5JKgU2iLDDBwi8.png"},{title:"Digital Portrait",category:"art",description:"Painted in Procreate",image:"https://file.garden/ZaN3pZzqMBk7KeIf/gal.gif"}],d=document.querySelector("#root");d.innerHTML=`
  <h1 id="greeting">My Portfolio</h1>
  <nav class="tabs">
    <button class="tab-btn active" data-category="coding">Coding</button>
    <button class="tab-btn" data-category="3d">3D Modeling</button>
    <button class="tab-btn" data-category="art">Art</button>
  </nav>
  <div id="project-list" class="projects"></div>
`;const g=document.querySelector("#project-list"),c=document.querySelectorAll(".tab-btn");function n(r){const o=l.filter(e=>e.category===r);g.innerHTML=o.map(e=>{let a="";return e.category==="3d"&&e.embedId?a=`
        <div class="sketchfab-embed">
          <iframe 
            title="${e.title}"
            src="https://sketchfab.com/models/${e.embedId}/embed?autostart=0" 
            allow="autoplay; fullscreen; xr-spatial-tracking">
          </iframe>
        </div>`:e.image&&(a=`<img src="${e.image}" alt="${e.title}" class="project-img">`),`
      <div class="card">
        ${a}
        <div class="card-content">
          <h3>${e.title}</h3>
          <p>${e.description}</p>
        </div>
      </div>
    `}).join("")}c.forEach(r=>{r.addEventListener("click",()=>{c.forEach(o=>o.classList.remove("active")),r.classList.add("active"),n(r.getAttribute("data-category"))})});n("coding");
