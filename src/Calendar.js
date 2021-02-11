import React from "react";
import ButtonClick from "./ButtonClick";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import ActualDate from "./actualDate";
import data from "./data.json";

const Calendar = () => {
  console.log(data);

  return (
    <div className="calendar__container">
      <h1>
        <ActualDate />
      </h1>
      <ButtonClick />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="calendar__top">Hora</TableCell>
              <TableCell className="calendar__top">Clase</TableCell>
              <TableCell className="calendar__top">Alumnos</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.fecha.map((celda) => (
              <TableRow>
                <TableCell>{celda.horario}</TableCell>
                <TableCell>{celda.clase}</TableCell>
                <TableCell>{celda.alumnos}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Calendar;
