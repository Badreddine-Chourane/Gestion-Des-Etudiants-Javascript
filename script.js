const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");

let students = [];
let editIndex = null;


function renderTable() {
  studentTableBody.innerHTML = "";
  students.forEach((student, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.email}</td>
      <td>${student.class}</td>
      <td>${student.year}</td>
      <td>${student.age}</td>
      <td>
        <button onclick="editStudent(${index})">Modifier</button>
        <button onclick="deleteStudent(${index})">Supprimer</button>
      </td>
    `;

    studentTableBody.appendChild(row);
  });
}


studentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("studentName").value.trim();
  const email = document.getElementById("studentEmail").value.trim();
  const studentClass = document.getElementById("studentClass").value.trim();
  const year = document.getElementById("studentYear").value.trim();
  const age = document.getElementById("studentAge").value.trim();

  if (editIndex !== null) {
  
    students[editIndex] = { name, email, class: studentClass, year, age };
    editIndex = null;
  } else {

    students.push({ name, email, class: studentClass, year, age });
  }

  studentForm.reset();
  renderTable();
});

function deleteStudent(index) {
  const confirmation = confirm("Êtes-vous sûr de vouloir supprimer cet étudiant ?");
  if (confirmation) {
    students.splice(index, 1);
    renderTable();
  }
}


function editStudent(index) {
  const student = students[index];
  document.getElementById("studentName").value = student.name;
  document.getElementById("studentEmail").value = student.email;
  document.getElementById("studentClass").value = student.class;
  document.getElementById("studentYear").value = student.year;
  document.getElementById("studentAge").value = student.age;

  editIndex33333 = index;
}
