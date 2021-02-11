import React from "react";
import { Button } from "@material-ui/core";

function ButtonClick() {
  function clickHandler() {
    document.getElementById('calendar__details').style.display = "block";
  }
  return (
    <div>
      <Button onClick={clickHandler} className="calendar__button">Ver más</Button>
    </div>
  );
}
export default ButtonClick;
