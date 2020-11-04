import React from "react";

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map((coutry) => (
        <tr>
          <td></td>
          <td></td>
        </tr>
      ))}
    </div> 
  );
}

export default Table;
