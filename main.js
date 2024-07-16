const evenTable = document.querySelector("#even-table");
const oddTable = document.querySelector("#odd-table");

for (let i = 1; i <= 300; i++) {
  if (i % 2 === 0) {
    evenTable.innerHTML += "<tr>" + "<td>" + i + "</td>" + "</tr>";
  } else {
    oddTable.innerHTML += "<tr>" + "<td>" + i + "</td>" + "</tr>";
  }
}

