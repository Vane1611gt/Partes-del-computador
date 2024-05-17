document.addEventListener('DOMContentLoaded', function() {

    const footer = document.querySelector('.footer');

    const imagen = document.createElement('img');
    imagen.src = 'https://media.licdn.com/dms/image/C560BAQFReQup08LukQ/company-logo_200_200/0/1652286229007?e=2147483647&v=beta&t=cB65tfGD72TrPKNWt3aSnaNNPKKTzlrgGY4vTAMhpyg'; 
    imagen.alt = 'Descripción de la imagen'; 

    const parrafo = document.createElement('p');
    parrafo.textContent = 'nombre de lo desarrolladas: Dylu y Vane'; 

    const texto1 = document.createElement('a');
    texto1.textContent = 'tik tok   Facebook  whatsapp';
    
    const texto2=this.createElement('a2');
    texto1.href = "https://github.com/Vane1611gt";

    

   
   
   

    footer.appendChild(imagen);
    footer.appendChild(parrafo);
    footer.appendChild(texto1);
    footer.appendChild(texto2);


    

   
});