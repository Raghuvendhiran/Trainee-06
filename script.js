function Add(event) {
    event.preventDefault();
    let table = document.getElementById("Table");
    let row = table.insertRow();
    let cell = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 = row.insertCell();
    let cell4 = row.insertCell();
    let cell5 = row.insertCell();
    let cell6 = row.insertCell();
    let cell7 = row.insertCell();
    let cell8 = row.insertCell();
    cell.innerHTML = document.getElementById("s.no").value;
    cell2.innerHTML = document.getElementById("First Name").value;
    cell3.innerHTML = document.getElementById("Last Name").value;
    cell4.innerHTML = document.getElementById("Address").value;
    cell5.innerHTML = document.getElementById("Pincode").value;
    cell6.innerHTML = document.getElementById("Gender").value;
    cell7.innerHTML = document.getElementById("State").value;
    cell8.innerHTML = document.getElementById("Country").value;
    // cell.innerHTML = "1";
    // cell2.innerHTML = "Raghuvendhiran";   
}