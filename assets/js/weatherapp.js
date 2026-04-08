class WeatherApp {

  constructor() {
    this.lugares = lugares;
    this.cache = {};
  }

  obtenerLugares() {
    return this.lugares;
  }

  obtenerLugarPorId(id) {
    return this.lugares.find(l => l.id === id);
  }

async obtenerClima(lat, lon) {
  const key = lat + "," + lon;

  if (this.cache[key] !== undefined) return this.cache[key];

  try {
    await new Promise(r => setTimeout(r, 400));

    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`
    );

    const data = await res.json();

    if (!data.current_weather || typeof data.current_weather.temperature !== "number") {
      console.log("API sin datos válidos:", data);
      return null;
    }

    const temp = data.current_weather.temperature;

    this.cache[key] = temp;
    return temp;

  } catch (err) {
    console.error("Error clima:", err);
    return null;
  }
}

  calcularEstadisticas(pronostico) {
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

    generarAlerta(stats) {
        if (stats.promedio > 25) {
            return "⚠️ Alerta de calor";
    }

        if (stats.conteo["Lluvioso"] >= 3) {
            return "🌧️ Alerta de lluvia";
    }

    return "Sin alertas";
    }
}

const app = new WeatherApp();
