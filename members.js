document.getElementById("addBtn").addEventListener("click", function () {
  const table = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  const nameCell = newRow.insertCell(0);
  const ageCell = newRow.insertCell(1);
  const locationCell = newRow.insertCell(2);
  const numberCell = newRow.insertCell(3);
  const schoolCell = newRow.insertCell(4);
  const actionCell = newRow.insertCell(5);

  nameCell.innerHTML = '<input type="text" value="New Name">';
  ageCell.innerHTML = '<input type="text" value="New Age">';
  locationCell.innerHTML = '<input type="text" value="New Location">';
  numberCell.innerHTML = '<input type="text" value="New Number">';
  schoolCell.innerHTML = '<input type="text" value="New School">';
  actionCell.innerHTML =
    '<button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button>';

  addRowActions(newRow);
});

function addRowActions(row) {
  row.querySelector(".edit-btn").addEventListener("click", function () {
    const cells = row.querySelectorAll("td:not(:last-child)");
    cells.forEach((cell) => {
      if (cell.querySelector("input")) {
        cell.innerHTML = cell.querySelector("input").value;
      } else {
        const value = cell.innerText;
        cell.innerHTML = `<input type="text" value="${value}">`;
      }
    });
    this.textContent = this.textContent === "Edit" ? "Save" : "Edit";
  });

  row.querySelector(".delete-btn").addEventListener("click", function () {
    row.remove();
  });
}

// Add actions to existing rows
document.querySelectorAll("#dataTable tbody tr").forEach(addRowActions);
