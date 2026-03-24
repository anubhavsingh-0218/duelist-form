function scrollToForm(){
  document.getElementById("form-section").scrollIntoView({
    behavior:"smooth"
  });
}

// success handling (optional)
document.getElementById("form").addEventListener("submit", function(){
  alert("Application submitted 🚀");
});