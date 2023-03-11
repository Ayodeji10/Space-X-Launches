import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { SINGLE_LAUNCH } from "../requests/requests";

function SingleLaunch() {
  // params
  const { id } = useParams();

  const navigate = useNavigate;

  const [launch, setLaunch] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    SINGLE_LAUNCH(id).then((res) => {
      console.log(res);
      setLaunch(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center py-5 my-5">
          <i className="fa-solid fa-spinner fa-spin" />
        </div>
      ) : (
        <div className="mt-5 single-launch">
          <Link to={`/`} className="back">
            <i className="fa-solid fa-arrow-left-long" />
            Back
          </Link>
          <div className="d-flex align-items-center mb-3">
            <div className="img-container">
              <img
                className="img-fluid"
                src={
                  launch.links.patch.small
                    ? launch.links.patch.small
                    : "https://i.pinimg.com/736x/b6/12/2e/b6122e067cad4cde07468d6627544989.jpg"
                }
                alt={launch.name}
              />
            </div>
            <div>
              <h4>
                <i className="fa-brands fa-space-awesome" />
                Name: {launch.name}
              </h4>
              <h4>
                <i
                  className={`fa-solid fa-thumbs-${
                    launch.success ? "up" : "down"
                  }`}
                  title={launch.success ? "Success" : "Failure"}
                />
                Flight Status: {launch.success ? "Success" : "Failure"}
              </h4>
              <h4 className="date">
                <i className="fa-solid fa-calendar-days" />
                Date: {launch.date_utc.substring(0, 10)}
              </h4>
            </div>
          </div>
          <img src="" alt="" />
          <iframe
            width="100%"
            height={515}
            src={`https://www.youtube.com/embed/${launch.links.youtube_id}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <h3 className="mb-5">{launch.details}</h3>
          <h4 className="mb-3">
            <i className="fa-solid fa-jet-fighter-up" />
            Flight Number: {launch.flight_number}
          </h4>
          <h4 className="mb-3">
            <i className="fa-brands fa-space-awesome" />
            Rocket ID: {launch.rocket}
          </h4>
          <h4 className="mb-3">
            <i className="fa-solid fa-helicopter-symbol" />
            Launchpad ID: {launch.launchpad}
          </h4>
          <h4 className="mb-3">
            <i className="fa-solid fa-truck-ramp-box" />
            Payloads: {launch.payloads.length}
          </h4>
          {launch.failures.length !== 0 && (
            <>
              <h4 className="mb-3">Failure(s): {launch.failures.length}</h4>
              <ul>
                {launch.failures.map((failure, i) => {
                  return <li key={i}>{failure.reason}</li>;
                })}
              </ul>
            </>
          )}
          {/* <h3>{launch.details}</h3> */}
          <a href={launch.links.article} target="_blank">
            <h4 className="mb-3">Article Link</h4>
          </a>
        </div>
      )}
    </div>
  );
}

export default SingleLaunch;
