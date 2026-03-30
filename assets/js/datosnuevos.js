// Cambie la forma en que se mostraban los iconos para que se pudieran hacer los calculos correctamente según el estado del clima, creando una constante nueva para los iconos.
const iconosClima = {
  "Soleado": "☀️",
  "Parcial": "⛅",
  "Nublado": "☁️",
  "Lluvioso": "🌧️",
  "Nieve": "❄️",
  "Caluroso": "🔥",
  "Viento": "💨",
  "Niebla": "🌫️"
};
const lugares = [
    // Aquí solo ajuste el código pero mantuve la idea de que lugares correspondia a Ciudades.
{
  id: 1,
  nombre: "Santiago",
  tempActual: 25,
  estadoActual: "Soleado",
  humedad: 45,
  viento: 12,
  pronosticoSemanal: [
    { dia: "Lunes", min: 20, max: 28, estado: "Soleado" },
    { dia: "Martes", min: 22, max: 30, estado: "Soleado" },
    { dia: "Miércoles", min: 19, max: 27, estado: "Nublado" },
    { dia: "Jueves", min: 21, max: 29, estado: "Soleado" },
    { dia: "Viernes", min: 23, max: 31, estado: "Caluroso" }
  ]
},
{
  id: 2,
  nombre: "Londres",
  tempActual: 12,
  estadoActual: "Lluvioso",
  humedad: 85,
  viento: 18,
  pronosticoSemanal: [
    { dia: "Lunes", min: 12, max: 15, estado: "Lluvioso" },
    { dia: "Martes", min: 11, max: 14, estado: "Lluvioso" },
    { dia: "Miércoles", min: 13, max: 17, estado: "Nublado" },
    { dia: "Jueves", min: 12, max: 16, estado: "Lluvioso" },
    { dia: "Viernes", min: 13, max: 15, estado: "Nublado" }
  ]
},
{
  id: 3,
  nombre: "Nueva York",
  tempActual: 18,
  estadoActual: "Nublado",
  humedad: 60,
  viento: 22,
  pronosticoSemanal: [
    { dia: "Lunes", min: 15, max: 18, estado: "Nublado" },
    { dia: "Martes", min: 17, max: 20, estado: "Parcial" },
    { dia: "Miércoles", min: 16, max: 19, estado: "Soleado" },
    { dia: "Jueves", min: 14, max: 17, estado: "Lluvioso" },
    { dia: "Viernes", min: 18, max: 21, estado: "Soleado" }
  ]
},
{
  id: 4,
  nombre: "Tokio",
  tempActual: 21,
  estadoActual: "Parcial",
  humedad: 70,
  viento: 14,
  pronosticoSemanal: [
    { dia: "Lunes", min: 20, max: 22, estado: "Parcial" },
    { dia: "Martes", min: 21, max: 23, estado: "Soleado" },
    { dia: "Miércoles", min: 19, max: 21, estado: "Nublado" },
    { dia: "Jueves", min: 22, max: 24, estado: "Soleado" },
    { dia: "Viernes", min: 20, max: 22, estado: "Parcial" }
  ]
},
{
  id: 5,
  nombre: "París",
  tempActual: 15,
  estadoActual: "Viento",
  humedad: 55,
  viento: 24,
  pronosticoSemanal: [
    { dia: "Lunes", min: 14, max: 16, estado: "Viento" },
    { dia: "Martes", min: 13, max: 15, estado: "Nublado" },
    { dia: "Miércoles", min: 15, max: 17, estado: "Parcial" },
    { dia: "Jueves", min: 16, max: 18, estado: "Soleado" },
    { dia: "Viernes", min: 14, max: 16, estado: "Lluvioso" }
  ]
},
{
  id: 6,
  nombre: "Moscú",
  tempActual: -5,
  estadoActual: "Nieve",
  humedad: 85,
  viento: 16,
  pronosticoSemanal: [
    { dia: "Lunes", min: -6, max: -4, estado: "Nieve" },
    { dia: "Martes", min: -8, max: -6, estado: "Nieve" },
    { dia: "Miércoles", min: -5, max: -3, estado: "Nublado" },
    { dia: "Jueves", min: -7, max: -5, estado: "Nieve" },
    { dia: "Viernes", min: -4, max: -2, estado: "Nublado" }
  ]
},
{
  id: 7,
  nombre: "Sidney",
  tempActual: 28,
  estadoActual: "Soleado",
  humedad: 50,
  viento: 16,
  pronosticoSemanal: [
    { dia: "Lunes", min: 24, max: 27, estado: "Soleado" },
    { dia: "Martes", min: 26, max: 29, estado: "Soleado" },
    { dia: "Miércoles", min: 25, max: 28, estado: "Soleado" },
    { dia: "Jueves", min: 23, max: 26, estado: "Parcial" },
    { dia: "Viernes", min: 27, max: 30, estado: "Caluroso" }
  ]
},
{
  id: 8,
  nombre: "Ciudad de México",
  tempActual: 22,
  estadoActual: "Soleado",
  humedad: 40,
  viento: 12,
  pronosticoSemanal: [
    { dia: "Lunes", min: 20, max: 23, estado: "Soleado" },
    { dia: "Martes", min: 19, max: 22, estado: "Soleado" },
    { dia: "Miércoles", min: 21, max: 24, estado: "Parcial" },
    { dia: "Jueves", min: 20, max: 23, estado: "Soleado" },
    { dia: "Viernes", min: 22, max: 25, estado: "Soleado" }
  ]
},
{
  id: 9,
  nombre: "Berlín",
  tempActual: 10,
  estadoActual: "Niebla",
  humedad: 78,
  viento: 15,
  pronosticoSemanal: [
    { dia: "Lunes", min: 9, max: 11, estado: "Niebla" },
    { dia: "Martes", min: 10, max: 12, estado: "Nublado" },
    { dia: "Miércoles", min: 8, max: 10, estado: "Lluvioso" },
    { dia: "Jueves", min: 7, max: 9, estado: "Niebla" },
    { dia: "Viernes", min: 9, max: 11, estado: "Nublado" }
  ]
},
{
  id: 10,
  nombre: "El Cairo",
  tempActual: 32,
  estadoActual: "Caluroso",
  humedad: 10,
  viento: 20,
  pronosticoSemanal: [
    { dia: "Lunes", min: 30, max: 33, estado: "Caluroso" },
    { dia: "Martes", min: 29, max: 32, estado: "Soleado" },
    { dia: "Miércoles", min: 31, max: 34, estado: "Caluroso" },
    { dia: "Jueves", min: 32, max: 35, estado: "Caluroso" },
    { dia: "Viernes", min: 30, max: 33, estado: "Soleado" }
  ]
}
];
// 1. ID desde URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// 2. Buscar ciudad en lugares
const ciudad = lugares.find(l => l.id === id);

// 3. DOM
const tituloCiudad = document.getElementById("nombre-ciudad");
const contenedorSemanal = document.getElementById("pronostico-semanal");
const textoHumedad = document.getElementById("humedad-detalle");
const textoViento = document.getElementById("viento-detalle");

// 4. Función de datos estadísticos
function calcularEstadisticas(pronostico) {
  let min = Infinity;
  let max = -Infinity;
  let suma = 0;
  let conteo = {};

  for (let dia of pronostico) {
    if (dia.min < min) min = dia.min;
    if (dia.max > max) max = dia.max;

    suma += (dia.min + dia.max) / 2;

    conteo[dia.estado] = (conteo[dia.estado] || 0) + 1;
  }

  const promedio = (suma / pronostico.length).toFixed(1);

  let resumen = "Semana variada";
  if (conteo["Soleado"] >= 3) resumen = "Semana mayormente soleada ☀️";
  else if (conteo["Lluvioso"] >= 3) resumen = "Semana lluviosa 🌧️";
  else if (max > 30) resumen = "Semana calurosa 🔥";

  return { min, max, promedio, conteo, resumen };
}

// 5. Datos claves
if (ciudad) {

  tituloCiudad.innerText = `Clima en ${ciudad.nombre}`;

  textoHumedad.innerText = `💧 Humedad: ${ciudad.humedad}%`;
  textoViento.innerText = `💨 Viento: ${ciudad.viento} km/h`;

  // Fondo dinámico
  const hero = document.getElementById("info-ciudad");

  hero.classList.remove(
    "weather-hero--sunny",
    "weather-hero--rainy",
    "weather-hero--windy",
    "weather-hero--cloudy",
    "weather-hero--default"
  );

  let modifier = "default";
  if (ciudad.viento >= 22) modifier = "windy";
  else if (ciudad.humedad >= 75) modifier = "rainy";
  else modifier = "sunny";

  hero.classList.add(`weather-hero--${modifier}`);

  // Pronóstico semanal
  contenedorSemanal.innerHTML = "";

  ciudad.pronosticoSemanal.forEach(dia => {
    contenedorSemanal.innerHTML += `
      <div class="col">
        <div class="card text-center">
          <div class="card-body">
            <p>${dia.dia}</p>
            <p class="fs-3">${iconosClima[dia.estado] || "❓"}</p>
            <p>${dia.estado}</p>
            <p>${dia.min}° / ${dia.max}°</p>
          </div>
        </div>
      </div>
    `;
  });

  // Estadísticas completas
  const stats = calcularEstadisticas(ciudad.pronosticoSemanal);

  let estadosHTML = "";
  for (let estado in stats.conteo) {
    estadosHTML += `<p>${estado}: ${stats.conteo[estado]} días</p>`;
  }

  const statsHTML = `
  <div class="mt-5 p-4 border rounded text-center bg-white shadow">
      <h3>Estadísticas de la semana</h3>
      <p>🌡️ Mín: ${stats.min}°C</p>
      <p>🔥 Máx: ${stats.max}°C</p>
      <p>📊 Promedio: ${stats.promedio}°C</p>
      ${estadosHTML}
      <p><strong>${stats.resumen}</strong></p>
    </div>
  `;

  document.querySelector("main").innerHTML += statsHTML;

} else {
  tituloCiudad.innerText = "Ciudad no encontrada";
}