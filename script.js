// Array to hold student data
let students = [];
let selectedStudentIndex = null;

// Function to add or update student
function addOrUpdateStudent() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (name && age) {
        if (selectedStudentIndex === null) {
            // Add new student
            students.push({ name, age });
        } else {
            // Update existing student
            students[selectedStudentIndex] = { name, age };
            selectedStudentIndex = null;
        }
        
        // Reset input fields
        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        
        // Refresh student table
        displayStudents();
    } else {
        alert('Please enter all fields');
    }
}

// Function to display students in the table
function displayStudents() {
    const tableBody = document.querySelector('#studentTable tbody');
    tableBody.innerHTML = ''; // Clear table body

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

// Function to edit a student's details
function editStudent(index) {
    selectedStudentIndex = index;
    const student = students[index];
    document.getElementById('name').value = student.name;
    document.getElementById('age').value = student.age;
}

// Function to delete a student
function deleteStudent(index) {
    students.splice(index, 1); // Remove student from array
    displayStudents(); // Refresh student table
}
