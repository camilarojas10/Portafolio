// alert("hola mundo")



let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(2500)
    .typeString('Camila Rojas')
    .pauseFor(300)
    .deleteAll()
    .typeString('Desarrolladora FRONTEND JR ')
    .pauseFor(1000)
    .start();


   /*  se usa en la frase del contacto , todo lo que se quiera volver a usar se le debe cambiar al id */
let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
    loop: true,
    delay: 75,
});

typewriterFrase
    .pauseFor(2500)
    .typeString('... Por lo tanto ')
    .pauseFor(300)
    .deleteAll()
    .typeString('MM ')
    .pauseFor(1000)
    .start();