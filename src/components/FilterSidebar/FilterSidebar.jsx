import React from "react";
import "./FilterSidebar.scss";

function FilterSidebar() {
  const accessories = [
    { name: "Apple Car", count: 2 },
    { name: "Air port & wireless", count: 48 },
    { name: "Apple Car", count: 2 },
    { name: "Cables & Docks", count: 14 },
    { name: "Cases & Films", count: 15 },
    { name: "Charging Devices", count: 23 },
    { name: "Connected home", count: 1 },
    { name: "Headphones", count: 97 },
  ];
  const brands = [
    { name: "Apple ", count: 2 },
    { name: "LG", count: 48 },
    { name: "Samsung", count: 2 },
    { name: "Siemens", count: 14 },
  ];

  return (
    <div className="d-flex flex-column gap-3">
      <div className="accesories d-flex flex-column p-3">
        <p>ACCESORIES</p>
        {accessories.map((item, index) => (
          <div key={index}>
            <span>{item.name}</span>
            <span>{item.count}</span>
          </div>
        ))}
      </div>
      <div className="prise p-3 d-flex flex-column ">
        <p>ACCESORIES</p>
        <div className="d-flex justify-content-between">
          <span>Ranger: </span>
          <span>$13.99 - $25.99</span>
        </div>
        <div>
          <input className="w-100" type="range"></input>
        </div>
      </div>
      <div className="color p-3 d-flex flex-column">
        <p>COLOR</p>
        <div className="d-flex justify-content-center gap-1">
          <div className="color-btn d-flex align-items-center">
            <button style={{ backgroundColor: "#006CFF" }}></button>
          </div>
          <div className="color-btn d-flex align-items-center">
            <button style={{ backgroundColor: "#FC3E39" }}></button>
          </div>
          <div className="color-btn d-flex align-items-center">
            <button style={{ backgroundColor: "black" }}></button>
          </div>
          <div className="color-btn d-flex align-items-center">
            <button style={{ backgroundColor: "#FFF600" }}></button>
          </div>
          <div className="color-btn d-flex align-items-center">
            <button style={{ backgroundColor: "#FF00B4" }}></button>
          </div>
          <div className="color-btn d-flex align-items-center">
            <button style={{ backgroundColor: "#EFDFDF" }}></button>
          </div>
        </div>
      </div>
      <div className="brand d-flex flex-column p-3">
        <p>ACCESORIES</p>
        {brands.map((item, index) => (
          <div key={index}>
            <span>{item.name}</span>
            <span>{item.count}</span>
          </div>
        ))}
      </div>
      <div className="button  mb-2 text-center fw-bold">
        <button className="btn">MORE</button>
      </div>
    </div>
  );
}

export default FilterSidebar;
