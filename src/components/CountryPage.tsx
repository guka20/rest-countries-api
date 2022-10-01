import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../API/api_events";
import { ThemeContext } from "../App";
import { Loading } from "../Modules/Loading";
import { BsArrowLeft } from "react-icons/bs";

export const CountryPage = () => {
  const theme = useContext(ThemeContext);
  const [countryData, setCountryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    let countryName: any = localStorage.getItem("countryName");
    setIsLoading(true);
    fetchData(`name/${JSON.parse(countryName)}`)
      .then((data) => setCountryData(data))
      .catch((err) => console.error(err));
    setIsLoading(false);
  }, []);
  useEffect(() => {
    console.log(countryData);
  }, [countryData]);
  return (
    <>
      <header className="country-page-header">
        <button
          onClick={() => navigate("/")}
          style={{
            backgroundColor: theme.secondary.bgcolor,
            color: theme.color,
          }}
        >
          <BsArrowLeft style={{marginRight:"10px",fontSize:"20px"}}/>Back
        </button>
      </header>
      {isLoading ? <Loading /> : <main className="country-page-main">
        <section className="image-section"></section>
        <section className="info-section"></section>
        </main>}
    </>
  );
};
