import "./PopupDialog.scss";
import image from "../../assets/images/img.png";

function PopupDialog({ showDialog, closeDialog }) {
  return (
    showDialog && (
      <dialog className="dialog-overlay">
        <div className="popup-overlay d-flex justify-content-center align-items-center">
          <div className="popup-box position-relative rounded shadow-lg bg-white">
            <button
              className=" close-btn  z-2 position-absolute top-0 end-0 m-1 "
              id="closePopup"
              onClick={closeDialog}
            >
              <i className="bx bx-x fs-3 "></i>
            </button>
            <div className="popup-content d-flex">
              <div className="popup-text text-center p-4">
                <h2 className="fw-bold p-2">Newsletter</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="input-group mt-4 mb-4 my-3">
                  <input
                    type="email"
                    className="form-control "
                    placeholder="Email"
                  />
                  <button className="btn SubscribeBtn">Subscribe</button>
                </div>
                <div className="form-check mt-3 mb-3 d-flex gap-1 justify-content-center">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" htmlFor="dontShowAgain">
                    Don`t show this popup again
                  </label>
                </div>
              </div>
              <div className="popup-image">
                <img src={image} alt="Gift" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        </div>
      </dialog>
    )
  );
}

export default PopupDialog;
