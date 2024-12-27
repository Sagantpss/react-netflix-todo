import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <>
      <h1>Netflix Series</h1>
      <section className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {seriesData.map((curEle) => {
          return <SeriesCard key={curEle.id} curData={curEle} />;
        })}
      </section>
    </>
  );
};

export default NetflixSeries;
