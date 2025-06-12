document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previene el comportamiento por defecto del enlace

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Desplazamiento suave
        });
    });
});