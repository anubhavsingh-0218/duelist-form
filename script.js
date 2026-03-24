function scrollToForm(){
  document.getElementById("form-section").scrollIntoView({
    behavior:"smooth"
  });
}

// subtle input animation
document.querySelectorAll("input, textarea, select").forEach(el=>{
  el.addEventListener("focus",()=>{
    el.style.transform="scale(1.02)";
  });
  el.addEventListener("blur",()=>{
    el.style.transform="scale(1)";
  });
});