# App de Clima - V.5

## Descripción

Esta es una aplicación web de clima 2026 que muestra información meteorológica de distintas ciudades.  
Permite ver el clima actual, humedad, viento y un pronóstico semanal de cada lugar seleccionado.


## Estructura de clases

- **WeatherApp**
  - Clase principal de la aplicación.
  - Maneja la lista de ciudades (lugares).
  - Obtiene datos del clima desde la API.
  - Calcula estadísticas del pronóstico semanal.
  - Guarda información en caché para mejorar rendimiento.


## 🌍 API utilizada

Se utiliza la API de Open-Meteo:

- Nombre: Open-Meteo API
- URL base: https://api.open-meteo.com/v1/forecast
- Documentación: https://open-meteo.com/

Esta API permite obtener datos meteorológicos como temperatura, viento y humedad sin necesidad de autenticación.


## Cálculo de estadísticas

Las estadísticas del pronóstico semanal se calculan recorriendo los datos diarios y obteniendo:

- Temperatura mínima del período
- Temperatura máxima del período
- Promedio de temperaturas
- Conteo de tipos de clima (soleado, nublado, lluvia, etc.)

Con estos valores se genera también un resumen y alertas según las condiciones del clima.


## Repositorio

https://github.com/pablodisewild/App-de-Clima-Versi-n-5_front-end_sustantivaSPA.git


## Autor

Pablo Ignacio Muñoz García - Estudiante del Bootcamp Front-end Sustantiva Spa