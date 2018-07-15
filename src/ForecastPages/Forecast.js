import React from "react";

const date = new Date();
const today = date.getDay();

var getDayName = dayID => {
  switch (dayID) {
    case 0: return 'Sunday';
    case 1: return 'Monday';
    case 2: return 'Tuesday';
    case 3: return 'Wednesday';
    case 4: return 'Thursday';
    case 5: return 'Friday';
    case 6: return 'Saturday';
    default: break;
  }
}

const Forecast = (props) => (
  <p>{getDayName(today)}</p>
)

export default Forecast;