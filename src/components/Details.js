import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow, 
} from "@material-ui/core";
import data from '../data.json';

const Details = () => {
  return (
    <div id="calendar__details" >
      <h2>Actualmente hay  Alumnos </h2>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="calendar__top">Nombre </TableCell>
              <TableCell className="calendar__top">Edad </TableCell>
              <TableCell className="calendar__top">Clase</TableCell>
              <TableCell className="calendar__top">Contacto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((celda) => (
              <TableRow>
                  <TableCell>{celda.fecha.horario}</TableCell>
                <TableCell>{celda.fecha.clase}</TableCell>
                <TableCell>{celda.fecha.alumnos}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Details;
