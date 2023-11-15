import "./payday.css";
import paydayImg from "./../../img/images/payday-img.jpg";

const Payday = () => {
  return (
    <section className="payday">
      <div className="container">
        <div className="payday__content">
          <div className="payday__img">
            <img src={paydayImg} alt="" />
          </div>
          <div className="payday__text">
            <h2 className="payday__title"><span className="highlight highlight--whiteLess">
                <span>PAYDAY</span>
                </span>SALE NOW</h2>
            <div className="payday__disc">
              Spend minimal $100 get 30% off voucher code for your next purchase
            </div>
            <div className="payday__term">
                <h3>1 June - 10 June 2021</h3>
                <p>*Terms & Conditions apply</p>
                </div>
            <div className="payday__btn-wrapper">
                <a href="#!" className="payday__btn">SHOP NOW</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payday;
