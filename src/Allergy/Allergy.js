import React from "react";
import {useState} from 'react'
import "./styles.css";
import { MultiSelect } from "react-multi-select-component";
const all=[
  "Balsam of Peru",
  "Buckwheat[1]",
  "Celery",
  "Egg",
  "Fish",
  "Fruit",
  "Garlic",
  "Oats",
  "Maize",
  "Milk[26]",
  "Mustard",
 " Peanut[39]",
  "Poultry Meat[40]",
  "Red Meat[42]",
  "Rice",
  "Sesame",
  "Shellfish",
  "Soy",
  "Sulfites"
  ,"Tartrazine",
 " Tree nut[58]",
  "Wheat[59]",
  "Medical[edit]",
  "Main article: Drug allergy",
  "Name",
  "Balsam of Peru",
  "Tetracycline",
  "Dilantin",
  "Tegretol (carbamazepine)",
  "Penicillin",
  "Cephalosporins",
  "Sulfonamides",
  "Non-steroidal anti-inflammatories (cromolyn sodium, nedocromil sodium, etc.)",
  "Intravenous contrast dye",
  "Local anesthetics",
  "Environmental[edit]",
  "Main article: Allergy § Other environmental factors",
  "Name",
  "Balsam of Peru",
  "Pollen",
  "Cat",
  "Dog",
  "Insect sting",
  "Mold",
  "Perfume",
  "Cosmetics",
  "Semen",
  "Latex",
 " Water (see note)",
  "Cold stimuli",
  "House dust mite[91]",
  "Nickel (nickel sulfate hexahydrate)",
  "Gold (gold sodium thiosulfate)",
  "Chromium",
  "Cobalt chloride",
  "Formaldehyde",
  "Photographic developers",
  "Fungicide",]

  var final=[]
  all.map((a)=>{
      final.push({
          "label":a,
          "value":a
      })
  })
const options = final;
// [
//   { label: "Grapes 🍇", value: "grapes" },
//   { label: "Mango 🥭", value: "mango" },
//   { label: "Strawberry 🍓", value: "strawberry", disabled: true },
// ];

 

export default function Allergy() {
  const [selected, setSelected] = useState([]);
  return (
    <div>
     <h1>Do You have any allergies?</h1>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
}