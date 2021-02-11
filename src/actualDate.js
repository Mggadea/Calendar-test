import React from "react";

(function () {
  let days = [
    "Domingo",
    "Lunes ",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes ",
    "Sábado",
  ];

  let months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Ocrubre",
    "Noviebre",
    "Diciembre",
  ];

  Date.prototype.getMonthName = function () {
    return months[this.getMonth()];
  };
  Date.prototype.getDayName = function () {
    return days[this.getDay()];
  };
})();

let now = new Date();
let day = now.getDayName();
let month = now.getMonthName();

const ActualDate = () => {
  return (
    <div>
      {day} {new Date().getDate()} de {month} de {new Date().getFullYear()}
    </div>
  );
};
export default ActualDate;
