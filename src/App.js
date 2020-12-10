import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const indianFood = {
    Punjabi: [
      { name: "Makke Di Roti with Sarson Ka Saag", Type: "9/10" },
      { name: "Aloo Paratha", Type: "6/10" },
      { name: "Hara Bhara Kebab", Type: "5/10" },
      { name: "Lassi", Type: "8/10" },
      { name: "Gajar Halwa", Type: "7/10" }
    ],
    Maharashtrian: [
      { name: "Batata Wada", Type: "6/10" },
      { name: "Masala Bhaat", Type: "7/10" },
      { name: "Puran Poli", Type: "9/10" },
      { name: "Ukdiche Modak", Type: "8/10" },
      { name: "Srikhand", Type: "9/10" }
    ],
    SouthIndian: [
      { name: "Dosa Sambaar", Type: "7/10" },
      { name: "Podi Idli", Type: "6/10" },
      { name: "Wada Sambaar", Type: "7/10" },
      { name: "Uttapam", Type: "8/10" },
      { name: "Mysore Masala Dosa", Type: "9/10" }
    ],
    StreetFood: [
      { name: "Pani Puri", Type: "10/10" },
      { name: "Vada Pav", Type: "9/10" },
      { name: "Paav Bhaji", Type: "9/10" },
      { name: "Cut Dosa", Type: "8/10" },
      { name: "Bhel", Type: "8/10" },
      { name: "Kulfi", Type: "9/10" }
    ]
  };

  var cuisines = Object.keys(indianFood);
  //console.log(cuisines);

  var [clickedCuisine, selectedCuisine] = useState("StreetFood");
  var selectedMenu = indianFood[clickedCuisine];
  var bgcolor = "white";
  //console.log("selected Menu: ", selectedMenu);

  function setlibgcolor(index) {
    if (index % 2 === 0) {
      bgcolor = "#FEF3C7";
    }
    bgcolor = "#FEE2E2";
  }

  return (
    <div className="App">
      <h1>Hungry ?</h1>
      <h3>Pick one of my Recommendations!</h3>

      <div>
        {cuisines.map((item) => {
          return (
            <button
              id="btn"
              key={item}
              onClick={() => selectedCuisine(item)}
              style={{ padding: "0.5rem", margin: "1rem", cursor: "pointer" }}
            >
              {item}
            </button>
          );
        })}
      </div>

      <ul>
        {
          //console.log(indianFood[clickedCuisine])
          selectedMenu.map((item, index) => {
            return (
              <li
                id="list"
                type="none"
                key={item.name}
                style={{ margin: "1rem" }}
              >
                {item.name}

                <br></br>
                <small> rating: ({item.Type})</small>
              </li>
            );
          })
        }
      </ul>
      <br></br>
    </div>
  );
}
