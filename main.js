let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Licenciada en Ciencias de la Informática')
  .pauseFor(200)
  .deleteChars(1)
  .start();