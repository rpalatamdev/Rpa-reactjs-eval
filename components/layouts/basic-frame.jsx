import React from "react";
import PropTypes from "prop-types";

const BasicFrame = ({ children }) => {
  const sections = [];
  React.Children.map(children, (child, i) => {
    sections.push(child);
  });

  return (
    <div className="container py-3">
      {sections[0]}
      {sections[1]}
      {sections[2]}
      {sections[3]}
      {sections[4]}
      {/* HEADER */}
      <header className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <img
            src="assets/images/logo-end.png"
            alt=""
            className="src"
            width="90px"
            style={{ marginRight: "10px" }}
          />
          <span className="fs-4">Sample page</span>
        </a>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <a className="me-3 py-2 text-dark text-decoration-none" href="#">
            Components
          </a>
          <a className="me-3 py-2 text-dark text-decoration-none" href="#">
            Features
          </a>
          <a className="me-3 py-2 text-dark text-decoration-none" href="#">
            Layouts
          </a>
          <a className="py-2 text-dark text-decoration-none" href="#">
            Content
          </a>
        </nav>
      </header>
      {/* TITLE */}
      <div className="title-container">
        <div className="p-3 pb-md-4 mx-auto ">
          <h1 className="display-4 fw-normal text-center">Homepage</h1>
          <p className="fs-5 text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            necessitatibus aperiam deleniti officiis, libero quasi maxime nobis
            harum inventore rerum saepe sit laudantium hic voluptate earum vel,
            doloribus aliquam illum!
          </p>
        </div>
      </div>
      {/* SECTION */}
      <main>
        <h2 className="display-6 fw-normal">Section A</h2>
        <div className="row row-cols-1 row-cols-md-3 mb-3">
          <div className="col">
            <div className="card rounded shadow-sm border-0">
              <div className="card-body p-4">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1556485078/shoes-2_g4qame.jpg"
                  alt=""
                  className="img-fluid d-block mx-auto mb-3"
                ></img>
                <h5>
                  <a href="#" className="text-dark">
                    Awesome Article
                  </a>
                </h5>
                <p className="small text-muted font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <ul className="list-inline small">
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star text-success"></i>
                  </li>
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star text-success"></i>
                  </li>
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star text-success"></i>
                  </li>
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star text-success"></i>
                  </li>
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star text-success"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded shadow-sm border-0">
              <div className="card-body p-4">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1556485078/shoes-4_vgfjy9.jpg"
                  alt=""
                  className="img-fluid d-block mx-auto mb-3"
                ></img>
                <h5>
                  <a href="#" className="text-dark">
                    Awesome Article
                  </a>
                </h5>
                <p className="small text-muted font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <ul className="list-inline small">
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star text-success"></i>
                  </li>
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star text-success"></i>
                  </li>
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star text-success"></i>
                  </li>
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star text-success"></i>
                  </li>
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star-o text-success"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded shadow-sm border-0">
              <div className="card-body p-4">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1556485077/shoes-3_rk25rt.jpg"
                  alt=""
                  className="img-fluid d-block mx-auto mb-3"
                ></img>
                <h5>
                  <a href="#" className="text-dark">
                    Awesome Article
                  </a>
                </h5>
                <p className="small text-muted font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <ul className="list-inline small">
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star text-success"></i>
                  </li>
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star text-success"></i>
                  </li>
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star text-success"></i>
                  </li>
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star-o text-success"></i>
                  </li>
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star-o text-success"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* SECTION */}
      <main>
        <h2 className="display-6 fw-normal">Section B</h2>
        <div className="row row-cols-1 row-cols-md-3 mb-3">
          <div className="col">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                alt=""
                className="card-img-top"
              ></img>
              <div className="card-body">
                <h5 className="card-title fs-6 fw-bold">SubSection</h5>
                <h3 className="card-title fs-4 fw-bold">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam eos
                  quo tempore iusto dolore modi dolorum in pariatur. Incidunt
                  repellendus praesentium quae!
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                alt=""
                className="card-img-top"
              ></img>
              <div className="card-body">
                <h5 className="card-title fs-6 fw-bold">SubSection</h5>
                <h3 className="card-title fs-4 fw-bold">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam eos
                  quo tempore iusto dolore modi dolorum in pariatur. Incidunt
                  repellendus praesentium quae!
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                alt=""
                className="card-img-top"
              ></img>
              <div className="card-body">
                <h5 className="card-title fs-6 fw-bold">SubSection</h5>
                <h3 className="card-title fs-4 fw-bold">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam eos
                  quo tempore iusto dolore modi dolorum in pariatur. Incidunt
                  repellendus praesentium quae!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="b-example-divider"></div>

        <div className="row row-cols-1 row-cols-md-3 mb-3">
          {[1, 2, 3].map((item, i) => {
            return (
              <div className="col" key={i}>
                <div className="teaser">
                  <div className="teaser-image">
                    <a href="#">
                      <img
                        className="img"
                        src="https://picsum.photos/700/470"
                      ></img>
                      <div className="teaser-caption">
                        Quisque a bibendum magna
                      </div>
                    </a>
                    <div className="ripple-cont"></div>
                  </div>
                  <div className="teaser-content">
                    <h6 className="category text-info">Cinema</h6>
                    <p className="teaser-description">
                      Lorem ipsum dolor sit amet, consectetur adipis cingelit.
                      Etiam lacinia elit et placerat finibus. Praesent justo
                      metus, pharetra vel nibh sit amet, tincidunt posuere
                      nulla. Vivamus odio antement, feugiat eget nisi sit amet,
                      scelerisque dignissim velit antement.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      {/* FOOTER */}
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <small className="d-block mb-3 text-muted">© 2021</small>
          </div>
          <div className="col-6 col-md">
            <h5>Components</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Functional Components
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Class Components
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Content</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Sources
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Models
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Data
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Team
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Locations
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Privacy
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

BasicFrame.propTypes = {
  children: PropTypes.node,
};
BasicFrame.defaultProps = {
  children: [null, null, null, null, null],
};

export default BasicFrame;
