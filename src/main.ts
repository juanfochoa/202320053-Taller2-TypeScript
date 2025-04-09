import { Serie } from './Serie.js';
import { series } from './data.js';


function renderServiceInTable(series: Serie[]): void{
  const tableBody = document.getElementById("series-body");
  if(!tableBody) return;

  series.forEach((serie)=>{
    const row = document.createElement("tr");

    row.id = `serie-${serie.id}`;
    row.classList.add("serie-row");
    row.style.cursor = "pointer";

    row.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;

    row.addEventListener("click", () => showSerieDetails(serie));
    tableBody.appendChild(row);
  });
  const totalSeasons = series.reduce((total, serie) => total + serie.seasons, 0);
  const Average = totalSeasons/series.length;

  const summaryRow = document.createElement("tr");
  summaryRow.innerHTML = `
    <td colspan="7" class="text-start fw-bold">Promedio de temporadas: ${Average.toFixed(2)}</td>
  `;
  
  tableBody.appendChild(summaryRow);
}
  
  function showSerieDetails(serie : Serie): void {
      const details = document.getElementById("serie-details");
      if(!details) return;

      details.classList.remove("d-none");
      
      details.innerHTML = `
        <div class="card">
        <img src="${serie.image}" class="card-img-top" alt="${serie.name}">
        <div class="card-body">
          <h5 class="card-title">${serie.name}</h5>
          <p class="card-text">${serie.description}</p>
          <div class="mb-2">
            <strong>Canal:</strong> ${serie.channel}
          </div>
          <div class="mb-2">
            <strong>Temporadas:</strong> ${serie.seasons}
          </div>
          <a href="${serie.website}" target="_blank" class="btn btn-primary">Ver sitio web</a>
        </div>
      </div>
    `;

    document.querySelectorAll(".serie-row").forEach((row) => {
      row.classList.remove("table-active");
    });
    const selectRow = document.getElementById(`serie-${serie.id}`);
    if(selectRow) {
      selectRow.classList.add("table-active");
    }
  }   
  
  document.addEventListener("DOMContentLoaded", () => { 
    console.log(series);
    renderServiceInTable(series);

    if (series.length>0){
      showSerieDetails(series[0]);
    }
  });
