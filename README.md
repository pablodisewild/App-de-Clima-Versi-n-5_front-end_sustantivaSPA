# App Clima del Mundo 2026 - Presentado por Pablo Ignacio Muñoz García

## Descripción

Aplicación web desarrollada en JavaScript que muestra el clima actual 2026 y el pronóstico semanal de distintas ciudades del mundo.
Permite visualizar detalles como temperatura, estado del clima, humedad, viento y estadísticas semanales.

## Modelo de Datos

La aplicación utiliza un arreglo llamado `lugares`, donde cada objeto representa una ciudad con la siguiente estructura:

* `id`: identificador único
* `nombre`: nombre de la ciudad
* `tempActual`: temperatura actual
* `estadoActual`: condición climática actual
* `humedad`: porcentaje de humedad
* `viento`: velocidad del viento
* `pronosticoSemanal`: arreglo con el clima de 5 días

Cada día incluye:

* día
* temperatura mínima y máxima
* estado del clima

## Estadísticas Calculadas

La aplicación calcula automáticamente:

* Temperatura mínima de la semana
* Temperatura máxima de la semana
* Temperatura promedio
* Conteo de estados climáticos (soleado, lluvioso, etc.)
* Resumen general del clima semanal

## Funcionalidades Clave

* Navegación entre ciudades mediante parámetros en la URL
* Renderizado dinámico con JavaScript
* Cálculo automático de estadísticas
* Diseño responsivo con Bootstrap