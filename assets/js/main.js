const container = document.getElementById("contenedor-ciudades");

lugares.forEach(ciudad => {
  const col = document.createElement("div");
  col.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4";

  col.innerHTML = `
    <article class="card h-100 city-card" data-id="${ciudad.id}">
      <div class="card-body text-center">
        <h5>${ciudad.nombre}</h5>
        <p class="display-6">${ciudad.tempActual}°C</p>
        <span class="badge bg-primary">${ciudad.estadoActual}</span>
      </div>
    </article>
  `;

  col.querySelector(".city-card").addEventListener("click", () => {
    window.location.href = `detalle.html?id=${ciudad.id}`;
  });

  container.appendChild(col);
});

