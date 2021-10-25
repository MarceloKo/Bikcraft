if (window.SimpleSlide) {
    new SimpleSlide({
        slide: 'quote', // nome do atributo data-slide="principal"
        time: 7000, // tempo de transição dos slides
        // nav: true, // se deve ou não mostrar a navegação
        // auto: true, // se o slide deve passar automaticamente
        // pauseOnHover: true, // pausa a transição automática
    })

    new SimpleSlide({
        slide: 'portfolio', // nome do atributo data-slide="principal"
        time: 7000, // tempo de transição dos slides
        nav: true, // se deve ou não mostrar a navegação
        // auto: true, // se o slide deve passar automaticamente
        // pauseOnHover: true, // pausa a transição automática
    })
}

if (window.SimpleAnime) {
    new SimpleAnime;
}