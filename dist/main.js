import { series } from "./data.js";
function renderSeriesInTable(series) {
    const tableBody = document.getElementById("series-body");
    if (!tableBody)
        return;
    series.forEach((serie) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td class="fw-bold">${serie.id}</td>
      <td><a href="${serie.website}" target="_blank">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        tableBody.appendChild(row);
    });
    const totalSeasons = series.reduce((total, serie) => total + serie.seasons, 0);
    const Average = totalSeasons / series.length;
    const summaryRow = document.createElement("tr");
    summaryRow.innerHTML = `
    <td colspan="7" class="text-start fw-bold">Promedio de temporadas: ${Average.toFixed(2)}</td>
  `;
    tableBody.appendChild(summaryRow);
}
document.addEventListener("DOMContentLoaded", () => {
    console.log(series);
    renderSeriesInTable(series);
});
