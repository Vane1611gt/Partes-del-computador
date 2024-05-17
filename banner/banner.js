document.addEventListener('DOMContentLoaded', function() {

  const banner = document.querySelector('.banner');

  const imagen = document.createElement('img');
  imagen.src= 'https://c7k3h3d4.rocketcdn.me/wp-content/uploads/2024/01/CPU.jpg';
    imagen.alt = 'Descripción de la imagen'; 

  const parrafo = document.createElement('h1');
  parrafo.textContent = 'CPU'; 

  const parrafo1= document.createElement('div');
  parrafo1.textContent="unidad central de procesamiento, es un componente de hardware y la unidad computacional central de un servidor. Los servidores y otros dispositivos inteligentes convierten los datos en señales digitales y realizan operaciones matemáticas en ellos."

  const parrafo2= document.createElement('div2');
  parrafo2.textContent="componentes: Velocidad de reloj, Núcleos y Hilos Arquitectura                ,Tecnología de fabricación  "                                      


  banner.appendChild(imagen);
  banner.appendChild(parrafo);
  banner.appendChild(parrafo1)
  banner.appendChild(parrafo2)

});
