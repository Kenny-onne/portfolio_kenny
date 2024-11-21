 // Votre code GSAP ici
 let element = document.getElementsByClassName("ets")
 // some example properties.
 gsap.to(element, {
    
    fontSize : 140 ,
    position : "relative" ,
    x:14 ,
    y:-40 ,
    yoyo : 1,
    duration : 1.4
    
 });
 let body = document.body

 gsap.set(body ,{ 
     display : 'flex',
     justifyContent: "center" ,
     alignItems : "center"
 })


//  le but de de faire a ce que tous le contenu de la page s'affiche sans scroll



document.addEventListener("DOMContentLoaded" , function(){
    const links = document.getElementById("nav-link");
    const sections = document.querySelectorAll(".section");

    links.forEach(link => {
        link.addEventListener("click" , function(e){
            e.preventDefault();

            // masquer les autres section
            sections.forEach(section=> {
                section.classList.remove("show");
            })

            // obtenir la cible a afficher  (la section selectionner)
            const targetId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);

            // affichage de la section
            targetSection.classList.add("show");
        })
    });
})