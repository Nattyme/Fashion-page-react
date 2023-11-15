import "./downloadApp.css";
import appImg from "./../../img/images/vouchers-img.png";
import appStoreImg from "./../../img/icons/app-store.png";
import googlePlayImg from "./../../img/icons/google-play.png";

const DownloadApp = () => {
  return (
    <section className="downloadApp">
      <div className="container">
        <div className="downloadApp__content">
          <div className="downloadApp__text">
            <div className="downloadApp__title">
              <h2>DOWNLOAD APP & GET THE VOUCHER!</h2>
            </div>
            <div className="downloadApp__disc">
              Get 30% off for first transaction using Rondovision mobile app for
              now.
            </div>
            <div className="downloadApp__btn-wrapper">
              <a className="downloadApp__btn" href="#!">
                <img src={appStoreImg} alt="AppStore" />
              </a>
              <a className="downloadApp__btn" href="#!">
                <img src={googlePlayImg} alt="GooglePlay" />
              </a>
            </div>
          </div>
          <div className="downloadApp__img">
            <img src={appImg} alt="download" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
