import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../App";
import { BsArrowLeft } from "react-icons/bs";
type CountryDataProp = {
  flags: {
    png: any;
  };
  name: {
    common: string;
    nativeName: any;
  };
  population: number;
  region: string;
  subregion: string;
  capital: [];
  languages: any;
  tld: [];
  currencies: any;
  borders:[];
};
export const CountryPage = () => {
  const theme = useContext(ThemeContext);
  const [countryData, setCountryData] = useState<CountryDataProp>(
    {} as CountryDataProp
  );
  const navigate = useNavigate();
  useEffect(() => {
    let countryName: any = localStorage.getItem("countryName");
    setCountryData(JSON.parse(countryName));
  }, []);
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
          <BsArrowLeft style={{ marginRight: "10px", fontSize: "20px" }} />
          Back
        </button>
      </header>
      <main className="country-page-main">
        <section className="image-section">
          <img src={countryData.flags?.png} alt="" />
        </section>
        <section className="info-section" style={{ color: theme.color }}>
          <h2>{countryData.name?.common}</h2>
          <div className="info-table">
            <div className="first-section">
              <div>
                <b>Native Name: </b>{" "}
                <span>
                  {countryData?.name?.nativeName !== undefined &&
                    countryData?.name?.nativeName[
                      Object.keys(countryData?.name?.nativeName)[0]
                    ]?.common}
                </span>
              </div>
              <div>
                <b>Population: </b> <span>{countryData?.population}</span>
              </div>
              <div>
                <b>Region: </b> <span>{countryData?.region}</span>
              </div>
              <div>
                <b>Sub Region: </b>
                <span>{countryData?.subregion}</span>
              </div>
              <div>
                <b>Capital: </b> <span>{countryData?.capital?.join(", ")}</span>
              </div>
            </div>
            <div className="second-section">
              <div>
                <b>Top Level Domain: </b>{" "}
                <span>{countryData?.tld?.join(", ")}</span>
              </div>
              <div>
                <b>Currencies: </b>
                <span>
                  {countryData?.currencies !== undefined &&
                    Object.keys(countryData?.currencies).map(
                      (l: any) => countryData?.currencies[l]?.name
                    )}
                </span>
              </div>
              <div>
                <b>Languages: </b>
                <span>
                  {countryData?.languages !== undefined &&
                    Object.keys(countryData?.languages).map(
                      (l: any) => countryData?.languages[l] + " "
                    )}
                </span>
              </div>
            </div>
          </div>
          <div className="border-countries">
            Border Countries:
            <div className="countries">
              {
                countryData?.borders?.map((l:any)=><span
                className="border-country"
                style={{ backgroundColor: theme.secondary.bgcolor }}
              >
                {l}
              </span>)
              }
              
              
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
