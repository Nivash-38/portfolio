const menu=document.querySelector(".menu"), nav=document.querySelector("nav");
menu?.addEventListener("click",()=>{nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.flexDirection="column";nav.style.position="absolute";nav.style.top="76px";nav.style.right="20px";nav.style.padding="18px";nav.style.background="#0f1726";nav.style.border="1px solid rgba(255,255,255,.09)";nav.style.borderRadius="12px"});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",()=>{if(innerWidth<650)nav.style.display="none"}));
