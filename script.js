/* Lista de Alunos e nota de cada prova */
const students = [
  {
    name: "Frederyco Gomes",
    noteOne: 5,
    noteTwo: 6
  },
  {
    name: "Kleber Ferreira",
    noteOne: 4,
    noteTwo: 6
  },
  {
    name: "Yuri Silva",
    noteOne: 3,
    noteTwo: 3
  },
];

function averageStudent(noteOne, noteTwo) {
  let average = (noteOne + noteTwo / 2);
  let result = average > 6;
  average = average.toFixed(2);
  if(result) {
    alert("Parabéns, " + student + "! Sua média foi de: " + average)
  } else if (average < 7) {
    alert("Reprovado")
  } else {
    alert(student + " estude para sua prova de recuperação! Sua média foi de: " +  average)
  }
}

function printStudentAverage(student) {
  return `A média do(a) aluno(a) ${student.name} é`;
}

for (let student of students) {
  let averageMessage = printStudentAverage(student);
  alert(averageMessage);
}