const trocaAtributo = (objetos) => {
    objetos.forEach(objeto => {
        objeto.target.classList.toggle("visivel", objeto.isIntersecting);
    });
};

const observador = new IntersectionObserver(trocaAtributo);

document.querySelectorAll('[anima_quando_visivel]').forEach(element => {
    observador.observe(element);
});