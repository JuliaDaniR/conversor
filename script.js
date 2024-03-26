document.addEventListener("DOMContentLoaded", function () {
  let elementoRespuesta = document.getElementById("respuesta");
  let monedaSelect = document.getElementById("moneda");
  let importeInput = document.getElementById("valorCotizar");

  // Manejador de evento para el cambio en el select de moneda
  monedaSelect.addEventListener("change", () => {
    convertirMoneda();
  });

  // Manejador de evento para el clic en los radio buttons
  let radios = document.querySelectorAll('input[type="radio"][name="monedas"]');
  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      convertirMoneda();
    });
  });

  // Función para realizar la conversión de moneda
  function convertirMoneda() {
    let monedaOrigen = monedaSelect.value.trim().toUpperCase();
    let importe = parseFloat(importeInput.value);
    let resultados = [];

    radios.forEach((radio) => {
      if (radio.checked) {
        let monedaDestino = radio.id.toUpperCase();
        let cotizacion = calcularCotizacion(monedaOrigen, monedaDestino);
        let resultado = {
          monedaDestino: monedaDestino,
          resultado: importe * cotizacion,
        };
        resultados.push(resultado);
      }
    });

    mostrarResultados(monedaOrigen, resultados);
  }

  // Función para calcular la cotización según la moneda de origen y destino
  function calcularCotizacion(monedaOrigen, monedaDestino) {
    switch (monedaOrigen) {
      case "DOLAR":
        return cotizarDolar(monedaDestino);
      case "EURO":
        return cotizarEuro(monedaDestino);
      case "PESOS-MEXICANOS":
        return cotizarPesosMexicanos(monedaDestino);
      case "PESOS-ARGENTINOS":
        return cotizarPesosArgentinos(monedaDestino);
      case "BITCOIN":
        return cotizarBitcoin(monedaDestino);
      default:
        return 0;
    }
  }

  function cotizarDolar(monedaDestino) {
    switch (monedaDestino) {
      case "DOLAR":
        return 1;
      case "EURO":
        return 0.92;
      case "PESOS-MEXICANOS":
        return 19.5;
      case "PESOS-ARGENTINOS":
        return 100;
      case "BITCOIN":
        return 0.000023;
      default:
        return 0;
    }
  }

  function cotizarEuro(monedaDestino) {
    switch (monedaDestino) {
      case "DOLAR":
        return 1.08;
      case "EURO":
        return 1;
      case "PESOS-MEXICANOS":
        return 18.09;
      case "PESOS-ARGENTINOS":
        return 929.31;
      case "BITCOIN":
        return 0.000015;
      default:
        return 0;
    }
  }

  function cotizarPesosMexicanos(monedaDestino) {
    switch (monedaDestino) {
      case "DOLAR":
        return 0.051;
      case "EURO":
        return 0.055;
      case "PESOS-MEXICANOS":
        return 1;
      case "PESOS-ARGENTINOS":
        return 51.34;
      case "BITCOIN":
        return 0.000000857;
      default:
        return 0;
    }
  }

  function cotizarPesosArgentinos(monedaDestino) {
    switch (monedaDestino) {
      case "DOLAR":
        return 0.01;
      case "EURO":
        return 0.0011;
      case "PESOS-MEXICANOS":
        return 0.019;
      case "PESOS-ARGENTINOS":
        return 1;
      case "BITCOIN":
        return 0.000000017;
      default:
        return 0;
    }
  }

  function cotizarBitcoin(monedaDestino) {
    switch (monedaDestino) {
      case "DOLAR":
        return 69528;
      case "EURO":
        return 64217.86;
      case "PESOS-MEXICANOS":
        return 1162358.36;
      case "PESOS-ARGENTINOS":
        return 59702332.5;
      case "BITCOIN":
        return 1;
      default:
        return 0;
    }
  }

  // Función para mostrar todos los resultados
  function mostrarResultados(monedaOrigen, resultados) {
    let mensaje = `Resultados de la cotización de ${importeInput.value} ${monedaOrigen}`;
    resultados.forEach((resultado) => {
      mensaje += ` A ${resultado.monedaDestino}: ${resultado.resultado.toFixed(
        2
      )} ${resultado.monedaDestino}`;
    });
    elementoRespuesta.innerHTML = mensaje;
  }
  // temperatura
  let respuesta = document.getElementById("respuestaTemperatura");
  let temperaturaSelect = document.getElementById("temperatura");
  let valorTemp = document.getElementById("valorConvertir");

  temperaturaSelect.addEventListener("change", () => {
    convertirMoneda();
  });

  // Manejador de evento para el clic en los radio buttons
  let radiosTemp = document.querySelectorAll(
    'input[type="radio"][name="temperaturas"]'
  );
  radiosTemp.forEach((radioTemp) => {
    radioTemp.addEventListener("change", () => {
      convertirTemperatura();
    });
  });

  function convertirTemperatura() {
    let temperaturaOrigen = temperaturaSelect.value.trim().toUpperCase();
    let valor = parseFloat(valorTemp.value);
    let resultadosTemp = [];

    radiosTemp.forEach((radioTemp) => {
      if (radioTemp.checked) {
        let temperaturaDestino = radioTemp.id.toUpperCase();
        let conversion = calcularConversion(
          temperaturaOrigen,
          temperaturaDestino
        );
        let resultadoTemp = {
          temperaturaDestino: temperaturaDestino,
          resultado: valor * conversion,
        };
        resultadosTemp.push(resultadoTemp);
      }
    });

    mostrarResultadosTemperatura(temperaturaOrigen, resultadosTemp);
  }

  // Función para calcular la cotización según la moneda de origen y destino
  function calcularConversion(temperaturaOrigen, temperaturaDestino) {
    switch (temperaturaOrigen) {
      case "KELVIN":
        return convertirKelvin(temperaturaDestino);
      case "FAHRENHEIT":
        return convertirFahrenheit(temperaturaDestino);
      case "CELSIUS":
        return convertirCelsius(temperaturaDestino);
      default:
        return 0;
    }
  }

  function convertirCelsius(temperaturaDestino) {
    switch (temperaturaDestino) {
      case "CELSIUS":
        return 1;
      case "KELVIN":
        return 274.15;
      case "FAHRENHEIT":
        return 33.8;
      default:
        return 0;
    }
  }

  function convertirFahrenheit(temperaturaDestino) {
    switch (temperaturaDestino) {
      case "CELSIUS":
        return -17.222222;
      case "KELVIN":
        return 255.927778;
      case "FAHRENHEIT":
        return 1;
      default:
        return 0;
    }
  }

  function convertirKelvin(temperaturaDestino) {
    switch (temperaturaDestino) {
      case "CELSIUS":
        return -272.15;
      case "KELVIN":
        return 1;
      case "FAHRENHEIT":
        return -457.87;
      default:
        return 0;
    }
  }

  function mostrarResultadosTemperatura(temperaturaOrigen, resultadosTemp) {
    let mensaje = `Resultados de la conversión de ${valorTemp.value} ${temperaturaOrigen}`;
    resultadosTemp.forEach((resultado) => {
      mensaje += ` A ${
        resultado.temperaturaDestino
      } es ${resultado.resultado.toFixed(2)} ${resultado.temperaturaDestino}`;
    });
    respuesta.innerHTML = mensaje;
  }
});

function mostrarConversor(id) {

  document.querySelector('.nombre').style.display = 'none';

  // Ocultar todos los contenedores
  let contenedores = document.querySelectorAll('.contenedor-moneda, .contenedor-clima');
  contenedores.forEach(contenedor => {
    contenedor.style.display = 'none';
  });

  let nombre = document.getElementById('nombre').value;

  if(nombre==""){
    nombre="Usuario"
  }

  // Mostrar el contenedor correspondiente al botón presionado
  let conversor = document.getElementById(id);
  if (conversor) {
    conversor.style.display = 'flex';
  }

  let saludoElement = document.getElementById('saludo');
  if (saludoElement) {
    saludoElement.textContent = "Bienvenido " + nombre + ", este es tu ";
  }
  let saludoElementTemp = document.getElementById('saludoTemperatura');
if (saludoElement) {
  saludoElementTemp.textContent = "Bienvenido " + nombre + ", este es tu ";
}
}
