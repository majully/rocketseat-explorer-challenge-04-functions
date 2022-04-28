/* Lista de Alunos e nota de cada prova */
const students = [
  {
    name: "Frederyco",
    noteOne: 5,
    noteTwo: 6
  },
  {
    name: "Kleber",
    noteOne: 4,
    noteTwo: 6
  },
  {
    name: "Yuri",
    noteOne: 3,
    noteTwo: 3
  },
];

/* Função calcular média do aluno e retornar mensagem de aprovado ou reprovado */
function averageStudent(student) {
  let average = (student.noteOne + student.noteTwo / 2);
  average = average.toFixed(1);
  if(average > 6) {
    return `A média do(a) aluno(a) ${student.name} é: ${average} \nParabéns, ${student.name}! Você foi aprovado(a) no concurso!`;
  } else if (average < 7) {
    return `A média do(a) aluno(a) ${student.name} é: ${average} \nNão foi dessa vez, ${student.name}! Tente novamente!`;
  }
}

for (let student of students) {
  let averageMessage = averageStudent(student);
  alert(averageMessage);
}