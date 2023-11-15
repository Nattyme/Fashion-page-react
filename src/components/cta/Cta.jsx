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
          <div className="cta__form">
            <div className="cta__input-wrapper">
              <input
                type="text"
                className="cta__input"
                placeholder="Add your email here"
              />
            </div>
            <div className="cta__btn-wrapper">
              <button className="cta__btn">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
