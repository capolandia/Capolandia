// Animación al hacer scroll

const elementos = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("mostrar");

        }

    });

});

elementos.forEach(card => {

    observer.observe(card);

});
