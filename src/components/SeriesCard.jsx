// import styled from "styled-components";

import { IoIosSwitch } from "react-icons/io";
import { EventProps } from "./EventProps";
import { State } from "./Hooks/State";

export const SeriesCard = ({ curData }) => {
  // console.log(props);
  const { id, title, image, rating, seasons, genre, cast, summary, watch_url } =
    curData;

  // const MainHeading = styled.h2({
  //   color: "red",
  // });

  // const Button = styled.button({
  //   background: "#e50914",
  // });
  const ratingClass = rating < 9 ? "average" : "top-rated";

  const handleClick = (event) => {
    alert("Click Button");
    console.log(event);
  };

  const handleWatchNow = (externallink) => {
    console.log(`You are opeing ${externallink}`);
  };

  return (
    <div
      key={id}
      className="flex flex-col items-center justify-center gap-5 shadow-lg shadow-red-500/100 "
    >
      <div className="bg-indigo-300 ...">
        <img
          className="object-cover h-48 w-96 ..."
          src={image}
          alt={title}
          title={title}
        />
      </div>

      <h2 className="">{title}</h2>
      <p style={{ fontSize: "20px" }}>
        <strong>Rating:</strong>{" "}
        <span className={`card-rating ${ratingClass}`}>{rating}</span>
      </p>
      <p>
        <strong>Seasons:</strong> {seasons}
      </p>
      <p>
        <strong>Genre:</strong> {genre.join(", ")}
      </p>
      <p>
        <strong>Cast:</strong> {cast.join(", ")}
      </p>
      <p className="text-justify p-3">
        Summary: <span className="">{summary}</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <button onClick={handleClick}>Read More 1</button>
        <button onClick={(event) => handleClick(event)}>Read More 2</button>
        <EventProps />
        <State />
      </div>
      <IoIosSwitch style={{ fontSize: "40px" }}/>

      <p>
        <a className="text-white" href={watch_url} target="_blank">
          <button
            style={{ background: "#e50914" }}
            onClick={() => handleWatchNow("Netflix URL")}
          >
            Watch Now
          </button>
          {/* <Button>Watch Now</Button> */}
        </a>
      </p>
    </div>
  );
};
