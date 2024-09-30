import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section className="bg-light">
        <div className="container-fluid">
          <div className="row row-cols-1 justify-content-center py-5">
            <div className="col-xxl-7 mb-4">
              <div className="lc-block">
                <lottie-player
                  src="https://assets9.lottiefiles.com/packages/lf20_u1xuufn3.json"
                  className="mx-auto"
                  background="transparent"
                  speed="1"
                  loop=""
                  autoplay=""
                ></lottie-player>
              </div>
            </div>
            <div className="col text-center">
              <div className="lc-block">
                <div className="lc-block mb-4">
                  <div editable="rich">
                    <p className="rfs-11 fw-light">
                      {" "}
                      The page you are looking for was moved, removed or might
                      never existed.
                    </p>
                  </div>
                </div>
                <div className="lc-block">
                  <NavLink
                    className="btn btn-lg btn-primary"
                    to={"/"}
                    role="button"
                  >
                    Back to homepage
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
