import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import mop from "../../../public/images/mobile.png";
import "./Carousel.scss";

function Carousel() {
  return (
    <>
      <div className="parent  text-white ">
        <div
          id="carouselExampleIndicators"
          className="carousel slide container"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="data d-flex align-items-center">
                <div className="info">
                  <h2>iPhone X</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy.
                  </p>
                  <a href="#">MORE</a>
                </div>
                <div className="image">
                  <img src={mop} className="d-block mr-3" alt="..." />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="data d-flex align-items-center">
                <div className="info">
                  <h2>iPhone X</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy.
                  </p>
                  <a href="#">MORE</a>
                </div>
                <img src={mop} className="d-block mr-3" alt="..." />
              </div>
            </div>
            <div className="carousel-item">
              <div className="data d-flex align-items-center">
                <div className="info">
                  <h2>iPhone X</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy.
                  </p>
                  <a href="#">MORE</a>
                </div>
                <img src={mop} className="d-block mr-3" alt="..." />
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev arrow"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <FontAwesomeIcon icon={faArrowLeft} size="2x" color="white" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next arrow"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <FontAwesomeIcon icon={faArrowRight} size="2x" color="white" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Carousel;
