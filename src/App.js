import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const indianFood = {
    Punjabi: [
      { name: "Makke Di Roti with Sarson Ka Saag", Type: "Meal" },
      { name: "Aloo Paratha", Type: "Meal" },
      { name: "Hara Bhara Kebab", Type: "Snack" },
      { name: "Lassi", Type: "Snack" },
      { name: "Gajar Halwa", Type: "Desert" }
    ],
    Maharashtrian: [
      { name: "Batata Wada", Type: "Snack" },
      { name: "Masala Bhaat", Type: "Meal" },
      { name: "Puran Poli", Type: "Meal" },
      { name: "Ukdiche Modak", Type: "Dessert" },
      { name: "Srikhand", Type: "Dessert" }
    ],
    SouthIndian: [
      { name: "Dosa Sambaar", Type: "Meal" },
      { name: "Podi Idli", Type: "Snack" },
      { name: "Wada Sambaar", Type: "Snack" },
      { name: "Uttapam", Type: "Meal" },
      { name: "Mysore Masala Dosa", Type: "Meal" }
    ],
    StreetFood: [
      { name: "Pani Puri", Type: "Snack" },
      { name: "Vada Pav", Type: "Snack" },
      { name: "Paav Bhaji", Type: "Meal" },
      { name: "Cut Dosa", Type: "Meal" },
      { name: "Bhel", Type: "Snack" },
      { name: "Kulfi", Type: "Desert" }
    ]
  };

  var cuisines = Object.keys(indianFood);
  //console.log(cuisines);

  var [clickedCuisine, selectedCuisine] = useState("StreetFood");
  var selectedMenu = indianFood[clickedCuisine];

  //console.log("selected Menu: ", selectedMenu);

  return (
    <div className="App">
      <h2>Snack Or Meal?</h2>
      <h1>How Hungry Are You ?</h1>
      <h3>Click to view my recommendations!</h3>
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
          selectedMenu.map((item) => {
            return (
              <li
                id="list"
                type="none"
                key={item.name}
                style={{ margin: "1rem" }}
              >
                <em>{item.name} </em>
                <small> ({item.Type})</small>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}
