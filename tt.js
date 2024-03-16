let content = document.getElementById('content');
let button = document.getElementById('btn');
let table_second = document.getElementById('populated-table');
let table = document.getElementById('table');
let menu = document.getElementById('key')
let close = document.getElementById('close')

menu.addEventListener('click', function(){
    table.style.display = 'block';
});
close.addEventListener('click', function(){
    table.style.display = 'none';
});
button.addEventListener('click', function() {
    // Get values from input fields and select element
    var description = document.querySelector('.in input:nth-of-type(1)').value;
    var place = document.querySelector('.in input:nth-of-type(2)').value;
    var time = document.querySelector('.in input:nth-of-type(3)').value;
    var notification = document.querySelector('.in input:nth-of-type(4)').value;

    // Add the new row to the table
    addRow(description, place, time, notification);
});

// Function to add a new row to the table
function addRow(description, place, time, notification) {
    // Create a new row element
    var newRow = document.createElement('tr');

    var descriptionCell = document.createElement('td');
    descriptionCell.textContent = description;
    newRow.appendChild(descriptionCell);

    var placeCell = document.createElement('td');
    placeCell.textContent = place;
    newRow.appendChild(placeCell);

    var timeCell = document.createElement('td');
    timeCell.textContent = time;
    newRow.appendChild(timeCell);

    var notificationCell = document.createElement('td');
    notificationCell.textContent = notification;
    newRow.appendChild(notificationCell);

    // Append the new row to the table body
    table_second.querySelector('tbody').appendChild(newRow);
}
