const students = [
  { id: 1, name: "Jane Wayfer" },
  { id: 2, name: "Imron Sagfner" }
];

type Student = typeof students;
type Student2 = typeof students[number];
