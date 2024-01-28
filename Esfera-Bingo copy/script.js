function generarNumero() {
    // Generar un número aleatorio entre 1 y 75
    var numero = Math.floor(Math.random() * 75) + 1;
    
    // Obtener la letra asociada al número 
    var letra = obtenerLetra(numero);
    
    // Mostrar el número y la letra en la esfera
    var esfera = document.getElementById('esfera');
    esfera.innerHTML = numero + '<br>' + letra;
  
    // Aplicar la clase 'generado' para la animación
    esfera.classList.add('generado');
  
    // Eliminar la clase después de 0.5 segundos (duración de la animación)
    setTimeout(function() {
      esfera.classList.remove('generado');
    }, 500);
  }
  
  function obtenerLetra(numero) {
    // Calcular la letra asociada al número
    var letraIndex = Math.ceil(numero / 15) - 1;
    var letras = 'BINGO';
    return letras.charAt(letraIndex);
  }  