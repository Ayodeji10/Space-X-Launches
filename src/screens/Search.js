import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LaunchCard from "../components/LaunchCard";
import { ALL_LAUNCHES } from "../requests/requests";

function Search() {
  // params
  const { date } = useParams();

  const navigate = useNavigate();

  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [availableLaunchDates, setAvailableLaunchDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [view, setView] = useState("grid");

  const switchView = () => {
    if (view === "grid") {
      setView("list");
    } else {
      setView("grid");
    }
  };

  useEffect(() => {
    if (selectedDate !== "") {
      navigate(`/search/${selectedDate}`);
    }
  }, [selectedDate]);

  useEffect(() => {
    ALL_LAUNCHES()
      .then((res) => {
        console.log(res.data);
        setLaunches(res.data);
        setAvailableLaunchDates([
          ...new Set(res.data.map((launch) => launch.date_utc)),
        ]);
        setLoading(false);
      })
      .catch((error) => console.log("error appears"));
  }, []);

  return (
    <div className="search-page">
      <div className="mt-5">
        <p className="mb-2">Launch Results for {date.substring(0, 10)}</p>
      </div>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center py-5">
          <i className="fa-solid fa-spinner fa-spin" />
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-between">
            <div className="mb-3">
              Select From Available Dates:
              <select
                name="category"
                id="category"
                onChange={(e) =>
                  setSelectedDate(
                    new Date(e.target.value.substring(0, 10)).toISOString()
                  )
                }
              >
                <option value="">-- Select Launch Date --</option>
                {availableLaunchDates.map((date) => {
                  return (
                    <option value={date} key={date}>
                      {date.substring(0, 10)}
                    </option>
                  );
                })}
              </select>
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
          <div className="row mt-4">
            {launches.filter(
              (launch) =>
                launch.date_utc.substring(0, 10) === date.substring(0, 10)
            ).length === 0 && <p>-- No Available Launches --</p>}
            {launches
              .filter(
                (launch) =>
                  launch.date_utc.substring(0, 10) === date.substring(0, 10)
              )
              .map((launch, i) => {
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
        </>
      )}
    </div>
  );
}

export default Search;
