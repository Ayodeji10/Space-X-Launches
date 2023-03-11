import React from "react";
import { useNavigate, Link } from "react-router-dom";

function LaunchCard({ launch, view, index }) {
  // navigate
  const navigate = useNavigate();

  return (
    <>
      {view === "grid" ? (
        <div
          className="col-lg-3 col-md-4 col-sm-6 col-12"
          onClick={() => navigate(`/launch-details/${launch.id}`)}
        >
          <div className="launch-card">
            <img
              src={
                launch.links.patch.small
                  ? launch.links.patch.small
                  : "https://i.pinimg.com/736x/b6/12/2e/b6122e067cad4cde07468d6627544989.jpg"
              }
              alt=""
            />
            <h4>
              {launch.name}:
              <i
                className={`fa-solid fa-thumbs-${
                  launch.success ? "up" : "down"
                }`}
                title={launch.success ? "Success" : "Failure"}
              />
            </h4>
            <h6>
              <i className="fa-solid fa-jet-fighter-up" />
              <b>Flight Number</b>: {launch.flight_number}
            </h6>
            <h6>
              <i className="fa-brands fa-space-awesome" />
              <b>Rocket ID</b>: {launch.rocket}
            </h6>
            <h6>
              <i className="fa-solid fa-helicopter-symbol" />
              <b>Launchpad ID</b>: {launch.launchpad}
            </h6>
            <h6>
              <i className="fa-solid fa-truck-ramp-box" />
              <b>Payloads</b>: {launch.payloads.length}
            </h6>
            <p className="date">
              <i className="fa-solid fa-calendar-days" />
              {launch.date_utc.substring(0, 10)}
            </p>
            <Link to={`/${launch.id}`}>Read More</Link>
          </div>
        </div>
      ) : (
        <div className="row list-view align-items-center mb-3">
          <div className="col-lg-1 col-md-1 col-sm-1 col-1">{index + 1}</div>
          <div className="col-lg-1 col-md-1 col-sm-4 col-4">
            <div className="rounded-img">
              <img
                src={
                  launch.links.patch.small
                    ? launch.links.patch.small
                    : "https://i.pinimg.com/736x/b6/12/2e/b6122e067cad4cde07468d6627544989.jpg"
                }
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-5 col-5">{launch.name}</div>
          <div className="col-lg-1 col-md-1 col-sm-2 col-2">
            <p className="mb-0">{launch.success ? "Success" : "Failure"}</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-10 col-10">
            <p className="mt-2 mt-sm-2 mt-md-0 mt-lg-0 mb-0">
              {launch.details}
            </p>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-2 col-2">
            <Link to={`/launch-details/${launch.id}`}>Read More</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default LaunchCard;
