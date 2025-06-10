
let students = [];
let selectedStudentIndex = null;

function addOrUpdateStudent() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (name && age) {
        if (selectedStudentIndex === null) {
          
            students.push({ name, age });
        } else {
         
            students[selectedStudentIndex] = { name, age };
            selectedStudentIndex = null;
        }
        
    
        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        
       
        displayStudents();
    } else {
        alert('Please enter all fields');
    }
}


function displayStudents() {
    const tableBody = document.querySelector('#studentTable tbody');
    tableBody.innerHTML = ''; 

    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td class="actions">
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function editStudent(index) {
    selectedStudentIndex = index;
    const student = students[index];
    document.getElementById('name').value = student.name;
    document.getElementById('age').value = student.age;
}

function deleteStudent(index) {
    students.splice(index, 1); 
    displayStudents(); 
}
