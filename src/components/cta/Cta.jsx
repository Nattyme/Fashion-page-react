import "./cta.css";

const Cta = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta__content">
          <div className="cta__title">
            JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
          </div>
          <div className="cta__text">
            Type your email down below and be young wild generation
          </div>

          <div className="cta__form-wrapper">
            <div className="cta__form">
              <div className="form__input-wrapper">
                <input className="form__input" type="text" placeholder="Add your email here" />
              </div>
              <div className="form__btn-wrapper">
                <button className="form__btn">SEND</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
