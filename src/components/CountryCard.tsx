import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../App";
type CountryCardProps = {
  dataObject: {
    name: { common: string };
    population: number;
    region: string;
    capital: [];
    flags: {
      png: string;
    };
  };
};
export const CountryCard = ({ dataObject }: CountryCardProps) => {
  const theme = useContext(ThemeContext);
  const { name, population, region, capital, flags } = dataObject;
  const navigate = useNavigate();
  const countryHandle = () => {
    console.log(dataObject);
    localStorage.setItem("countryName", JSON.stringify(dataObject));
    navigate("/country");
  };
  return (
    <div
      className="card"
      onClick={countryHandle}
      style={{ backgroundColor: theme.secondary.bgcolor, color: theme.color }}
    >
      <img src={flags?.png} alt="flag" />
      <div className="info">
        <h2>{name.common}</h2>
        <div className="details">
          <div>
            <b>Population: </b> {population}
          </div>
          <div>
            <b>Region: </b> {region}
          </div>
          <div>
            <b>Capital: </b> {capital?.join(",")}
          </div>
        </div>
      </div>
    </div>
  );
};
