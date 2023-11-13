import React from "react";

function Students(image, name, country, profession, company, testimony) {
  this.image = image;
  this.name = name;
  this.country = country;
  this.profession = profession;
  this.company = company;
  this.testimony = testimony;
}

let emma = new Students(
  "Emma",
  "Emma Bostian",
  "Suecia",
  "Ingeniera de Software",
  "Spotify",
  '"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."'
);
let sarah = new Students(
  "Sarah",
  "Sarah Chima",
  "Nigeria",
  "Ingeniera de Software",
  "ChatDesk",
  '"FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."'
);
let shawn = new Students(
  "Shawn",
  "Shawn Wang",
  "Singapur",
  "Ingeniero de Software",
  "Amazon",
  '"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."'
);

let AllStudents = {
  Emma: emma,
  Sarah: sarah,
  Shawn: shawn,
};
export default AllStudents;
