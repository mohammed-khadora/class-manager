let arr = [
    { name: 'mark', id : '4567225', grade: 79 },
    { name: 'mahmoud', id : '1264325', grade: 99 },
    { name: 'maya', id : '1234325', grade: 89 },
    { name: 'maria', id : '6544325', grade: 69 }
];

const table= document.querySelector('#data');

const getTableRow = (rowData) => {
    let row=document.createElement('tr');

    let name=document.createElement('td');
    let id=document.createElement('td');
    let grade=document.createElement('td');
    name.innerHTML=rowData.name;
    id.innerHTML=rowData.id;
    grade.innerHTML=rowData.grade;
    row.appendChild(name);
    row.appendChild(id);
    row.appendChild(grade);
    return row;
}

const updateTable = () => {
    table.innerHTML="";
    for(let i=0 ; i <arr.length ; i++) {
        table.appendChild(getTableRow(arr[i]));
    }
}

const name=document.querySelector('#name');
const id=document.querySelector('#id');
const grade=document.querySelector('#grade');
const add=document.querySelector('#add');

add.onclick = () => {
    if(name.value.length<=2) return;
    if(grade.value<0 || grade.value>100) return;
    if(id.value.length != 7) return;
    let newRow = { name:name.value, id:id.value, grade:grade.value };
    arr.push(newRow);
    console.log(arr);
    updateTable();
}

updateTable();


