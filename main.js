function mobileMenu(){
    var x = document.getElementById("menuLinks");
    if (x.style.display === "block"){
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

ScrollReveal({
    reset: true
  });
  
ScrollReveal('.arrow-down',
    {distance:'100px'},
    {duration: '500ms'}
    
);