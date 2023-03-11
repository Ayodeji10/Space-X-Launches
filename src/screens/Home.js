import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LaunchCard from "../components/LaunchCard";
import { ALL_LAUNCHES } from "../requests/requests";

function Home() {
  // navigate
  const navigate = useNavigate();

  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterDate, setFilterDate] = useState("");
  const [view, setView] = useState("grid");
  const [error, setError] = useState("");

  const switchView = () => {
    if (view === "grid") {
      setView("list");
    } else {
      setView("grid");
    }
  };

  useEffect(() => {
    ALL_LAUNCHES()
      .then((res) => {
        setLaunches(res.data);
        setLoading(false);
      })
      .catch((error) => console.log("error appears"));
  }, []);

  return (
    <>
      <h1>SPACE-X LAUNCHES</h1>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <label htmlFor="date">Search Launches</label>
          <input
            type="date"
            id="date"
            className="mb-lg-0 mb-md-0 mb-sm-2 mb-2"
            onChange={(e) => {
              setFilterDate(new Date(e.target.value).toISOString());
            }}
          />
          <button
            onClick={() => {
              if (filterDate === "") {
                setError("Please Select a Date");
              } else {
                navigate(`/search/${filterDate}`);
              }
            }}
          >
            Search
          </button>
        </div>
        <div>
          <p onClick={switchView} className="mb-0 switch">
            Switch to {view === "grid" ? "List" : "Grid"} View
            {view === "list" ? (
              <i className="fa-solid fa-table-cells" />
            ) : (
              <i className="fa-solid fa-list" />
            )}
          </p>
        </div>
      </div>
      {error && (
        <p className="mb-0" style={{ color: "red" }}>
          {error}
        </p>
      )}
      {loading ? (
        <div className="d-flex justify-content-center align-items-center py-5">
          <i className="fa-solid fa-spinner fa-spin" />
        </div>
      ) : (
        <div className="row mt-5">
          {launches.map((launch, i) => {
            return (
              <LaunchCard
                key={launch.id}
                launch={launch}
                view={view}
                index={i}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default Home;
