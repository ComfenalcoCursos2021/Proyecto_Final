let traerDatos = async(file)=>{
    let config = {
        method: "POST", 
        body: JSON.stringify({file: file})
    }
    let petecion = await fetch("api.php", config);
    let datos = await petecion.text();
    return datos;
}

addEventListener("DOMContentLoaded", async(e)=>{
    document.querySelector(".logo").insertAdjacentHTML("beforeend", await traerDatos("icono"));
    document.querySelector(".menu").insertAdjacentHTML("beforeend", await traerDatos("menu"));
    document.querySelector(".home-content").insertAdjacentHTML("beforeend", await traerDatos("inicio"));
    
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: JSON.parse(document.querySelector(".typing").dataset.lista),
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    }); 

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
})