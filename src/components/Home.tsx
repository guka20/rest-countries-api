import { useState, useContext, useEffect } from "react";
import { fetchData } from "../API/api_events";
import { ThemeContext } from "../App";
import { Dropdown } from "../Modules/Dropdown";
import { Loading } from "../Modules/Loading";
import { CountryCard } from "./CountryCard";
export const Home = () => {
  const theme = useContext(ThemeContext);
  const [filter, setFilter] = useState("Filter By Region");
  const [isDropedDown, setIsDropedDown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    let fetchBy = filter === "Filter By Region" ? false : true;
    setLoading(true);
    fetchData(
      fetchBy ? `region/${filter}` : search === "" ? "all" : `name/${search}`
    ).then((fetched) => {
      setData(fetched.slice(0, 8));
    });
  }, [filter, search]);
  useEffect(() => {
    data.length !== 0 && setLoading(false);
  }, [data]);
  return (
    <>
      {
        <main className="home-page">
          <header className="home-page-head">
            <input
              placeholder="Search for a country"
              type="search"
              onChange={(e) => setSearch(e.currentTarget.value)}
              style={{
                backgroundColor: theme.secondary.bgcolor,
                color: theme.color,
              }}
            />
            <Dropdown
              filter={filter}
              setFilter={setFilter}
              isDropedDown={isDropedDown}
              setIsDropedDown={setIsDropedDown}
            />
          </header>
          {loading ? (
            <Loading/>
          ) : (
            <section className="country-cards-section">
              {data.map((l: any, index: number) => (
                  <CountryCard key={index} dataObject={l} />
              ))}
            </section>
          )}
        </main>
      }
    </>
  );
};
