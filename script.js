const accordionitmheaders=document.querySelectorAll(".accordion-item-header");

accordionitmheaders.forEach(accordionitmheader=>{
accordionitmheader.addEventListener("click", event=>{
  accordionitmheader.classList.toggle("active");
  
});
});


