import React from "react";

function Table({ countries }) {
  console.log(countries);
  console.log(typeof countries);
  console.log(Object.entries(countries));
  console.log(Object.keys(countries))
  return (
    <div className="table">
      {Object.entries(countries).map((item) => (
            <div>
              
              {item.map((Nitem,cases)=>(
                <tr>
                  <td>
                    {Nitem.updated}
                  </td>
                </tr>
              ))}
            </div>
     
      ))}
      
      
     
    </div>
  );
}

export default Table;
