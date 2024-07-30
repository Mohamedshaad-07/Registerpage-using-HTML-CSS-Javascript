document.getElementById('transaction-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;

    const table = document.getElementById('transaction-table');
    const row = table.insertRow();
    row.innerHTML = `
        <td>${type}</td>
        <td>${name}</td>
        <td>$${amount}</td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
    `;

    document.getElementById('transaction-form').reset();
});

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
