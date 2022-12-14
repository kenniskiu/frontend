import React from "react";

const Mentor = () => {
  return (
    <section className="section-team pb-5 pt-0 pt-lg-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="first-color-second">Mentor <span className="title-small">Kami</span></h2>
          </div>
        </div>
        <div className="row pb-1">
          <div className="col-sm-6 col-lg-3 col-xl-3">
            <div className="single-person">
              <div className="person-image">
                <img src="./assets/images/mentor/pak-kembar.png" alt="" />
              </div>
              <div className="person-info text-center">
                <h3 className="full-name">Kembar Cahyono </h3>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3 col-xl-3">
            <div className="single-person">
              <div className="person-image">
                <img src="./assets/images/mentor/pak-alyunas.png" alt="" />
              </div>
              <div className="person-info text-center">
                <h3 className="full-name">Alyuhanas</h3>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3 col-xl-3">
            <div className="single-person">
              <div className="person-image">
                <img src="./assets/images/mentor/pak-apud.png" alt="" />
              </div>
              <div className="person-info text-center">
                <h3 className="full-name">Apud Salapudin</h3>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3 col-xl-3">
            <div className="single-person">
              <div className="person-image">
                <img src="./assets/images/mentor/pak-komala.png" alt="" />
              </div>
              <div className="person-info text-center">
                <h3 className="full-name">M. Komala Daru </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;
