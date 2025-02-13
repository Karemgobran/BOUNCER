import "./LatestNews.scss";
import LatestNewsData from "../../data/LatestNews/";

function LatestNews() {
  return (
    <>
      <div className="title container">
        <h2>Latest News</h2>
      </div>
      <div className="cards container">
        {LatestNewsData.map((product) => (
          <div className="card" key={product.id}>
            <div className="image ">
              <img src={product.img} alt="news" />
            </div>
            <div className="news" key={product.id}>
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
