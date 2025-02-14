import "./LatestNews.scss";
import LatestNewsData from "../../data/LatestNews/";

function LatestNews() {
  return (
    <>
      <div className="title container">
        <h2 className="text-center">Latest News</h2>
      </div>
      <div className="cards container">
        {LatestNewsData.map((product) => (
          <div className="card d-flex flex-row" key={product.id}>
            <div className="image ">
              <img src={product.img} alt="news" />
            </div>
            <div
              className="news d-flex flex-column justify-content-between"
              key={product.id}
            >
              <span>{product.releaseDate}</span>
              <p className="name">{product.name}</p>
              <p className="details">{product.details}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LatestNews;
