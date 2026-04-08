window.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const ciudad = app.obtenerLugarPorId(id);

  const tituloCiudad = document.getElementById("nombre-ciudad");
  const contenedorSemanal = document.getElementById("pronostico-semanal");
  const textoHumedad = document.getElementById("humedad-detalle");
  const textoViento = document.getElementById("viento-detalle");
  const hero = document.getElementById("info-ciudad");

  if (!ciudad) {
    tituloCiudad.innerText = "Ciudad no encontrada";
    return;
  }

  // 🌡️ clima async
  tituloCiudad.innerText = `Clima en ${ciudad.nombre} (cargando...)`;

tituloCiudad.innerText = `Clima en ${ciudad.nombre} (cargando...)`;

app.obtenerClima(ciudad.lat, ciudad.lon)
  .then(temp => {
    console.log("TEMP LLEGÓ:", temp);

    // 🔥 FORZAMOS ACTUALIZACIÓN SIEMPRE
    tituloCiudad.textContent =
      `Clima en ${ciudad.nombre}: ` +
      (temp !== null ? `${temp}°C` : "sin datos");
  })
  .catch(err => {
    console.error("ERROR CLIMA:", err);
    tituloCiudad.textContent =
      `Clima en ${ciudad.nombre}: error al cargar`;
  });

  // 📊 datos básicos
  textoHumedad.innerText = `💧 Humedad: ${ciudad.humedad}%`;
  textoViento.innerText = `💨 Viento: ${ciudad.viento} km/h`;

  // 🎨 fondo dinámico
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

  // 📅 pronóstico semanal
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

  // 📊 estadísticas
  const stats = app.calcularEstadisticas(ciudad.pronosticoSemanal);
  const alerta = app.generarAlerta(stats);

  let estadosHTML = "";
  for (let estado in stats.conteo) {
    estadosHTML += `<p>${estado}: ${stats.conteo[estado]} días</p>`;
  }

  const statsHTML = `
    <div class="mt-5 p-4 border rounded text-center bg-white shadow">
      <h3>Estadísticas de la semana</h3>
      <p><strong>${alerta}</strong></p>
      <p>🌡️ Mín: ${stats.min}°C</p>
      <p>🔥 Máx: ${stats.max}°C</p>
      <p>📊 Promedio: ${stats.promedio}°C</p>
      ${estadosHTML}
      <p><strong>${stats.resumen}</strong></p>
    </div>
  `;

  const statsContainer = document.createElement("div");
    statsContainer.innerHTML = statsHTML;
    document.querySelector("main").appendChild(statsContainer);

  console.log("ID URL:", id);
console.log("CIUDAD:", ciudad);
console.log("APP:", app);
});