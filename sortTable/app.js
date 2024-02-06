let sortDirection = false;
let personData = [
    { name: 'Jayagopal', age: 23},
    { name: 'Maniiiikandan', age: 22},
    { name: 'Mentor', age: 22},
    { name: 'Barath', age: 23},
    { name: 'Poovarasan', age: 21},
];
loadTableData(personData);

function loadTableData(tableData){
    const tableBody = document.getElementById("tableData")
    let dataHtml = '';

    for(let person of personData){
        dataHtml += `<tr><td>${person.name}</td><td>${person.age}</td></tr>`
    }

    tableBody.innerHTML = dataHtml;
}
function sortTable(columnName){
    const dataType = typeof columnName;

    console.log(columnName);
    
    sortDirection = !sortDirection;

    switch(columnName){
        case 'age': sortNumberColumn(sortDirection, columnName);
        break; 
    }
}

function sortNumberColumn(sort, columnName){
    tableData = tableData.sort((p1, p2) => {
        return sort ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName]
    });
}