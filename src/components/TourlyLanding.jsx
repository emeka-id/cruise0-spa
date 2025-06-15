// src/components/TourlyLanding.jsx
import { useAuth0 } from "@auth0/auth0-react";

function TourlyLanding() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>

  <header className="header" data-header>

    <div className="overlay" data-overlay></div>

    <div className="header-top">
      <div className="container">

        <a href="tel:+01123456790" className="helpline-box">

          <div className="icon-box">
            <ion-icon name="call-outline"></ion-icon>
          </div>

          <div className="wrapper">
            <p className="helpline-title">For Further Inquires :</p>

            <p className="helpline-number">+01 (123) 4567 90</p>
          </div>

        </a>

        <a href="#" className="logo">
          <img src="./assets/images/logo.svg" alt="Tourly logo"/>
        </a>

        <div className="header-btn-group">

          <button className="search-btn" aria-label="Search">
            <ion-icon name="search"></ion-icon>
          </button>

          <button className="nav-open-btn" aria-label="Open Menu" data-nav-open-btn>
            <ion-icon name="menu-outline"></ion-icon>
          </button>

        </div>

      </div>
    </div>

    <div className="header-bottom">
      <div className="container">

        <ul classNameName="social-list">

          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
          </li>

        </ul>

        <nav className="navbar" data-navbar>

          <div className="navbar-top">

            <a href="#" className="logo">
              <img src="./assets/images/logo-blue.svg" alt="Tourly logo"/>
            </a>

            <button className="nav-close-btn" aria-label="Close Menu" data-nav-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>

          </div>

          <ul className="navbar-list">

            <li>
              <a href="#home" className="navbar-link" data-nav-link>home</a>
            </li>

            <li>
              <a href="#" className="navbar-link" data-nav-link>about us</a>
            </li>

            <li>
              <a href="#destination" className="navbar-link" data-nav-link>destination</a>
            </li>

            <li>
              <a href="#package" className="navbar-link" data-nav-link>packages</a>
            </li>

            <li>
              <a href="#gallery" className="navbar-link" data-nav-link>gallery</a>
            </li>

            <li>
              <a href="#contact" className="navbar-link" data-nav-link>contact us</a>
            </li>

          </ul>

        </nav>

        <button className="btn btn-primary">Book Now</button>

      </div>
    </div>

  </header>





  <main>
    <article>

      
      <section className="hero" id="home">
        <div className="container">

          <h2 className="h1 hero-title">Journey to explore world</h2>

          <p className="hero-text">
            Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit className corporis nostra rem quos
            voluptatibus habitant?
            Fames, vivamus minim nemo enim, gravida lobortis quasi, eum.
          </p>

          <div className="btn-group">
            <button className="btn btn-primary">Learn more</button>

            <button className="btn btn-secondary">Book now</button>
          </div>

        </div>
      </section>




      <section className="tour-search">
        <div className="container">

          <form action="" className="tour-search-form">

            <div className="input-wrapper">
              <label for="destination" className="input-label">Search Destination*</label>

              <input type="text" name="destination" id="destination" required placeholder="Enter Destination"
                className="input-field"/>
            </div>

            <div className="input-wrapper">
              <label for="people" className="input-label">Pax Number*</label>

              <input type="number" name="people" id="people" required placeholder="No.of People" className="input-field"/>
            </div>

            <div className="input-wrapper">
              <label for="checkin" className="input-label">Checkin Date**</label>

              <input type="date" name="checkin" id="checkin" required className="input-field"/>
            </div>

            <div className="input-wrapper">
              <label for="checkout" className="input-label">Checkout Date*</label>

              <input type="date" name="checkout" id="checkout" required className="input-field"/>
            </div>

            <button type="submit" className="btn btn-secondary">Inquire now</button>

          </form>

        </div>
      </section>


      <section className="popular" id="destination">
        <div className="container">

          <p className="section-subtitle">Uncover place</p>

          <h2 className="h2 section-title">Popular destination</h2>

          <p className="section-text">
            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
            Sit ornare
            mollitia tenetur, aptent.
          </p>

          <ul className="popular-list">

            <li>
              <div className="popular-card">

                <figure className="card-img">
                  <img src="./assets/images/popular-1.jpg" alt="San miguel, italy" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p className="card-subtitle">
                    <a href="#">Italy</a>
                  </p>

                  <h3 className="h3 card-title">
                    <a href="#">San miguel</a>
                  </h3>

                  <p className="card-text">
                    Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div className="popular-card">

                <figure className="card-img">
                  <img src="./assets/images/popular-2.jpg" alt="Burj khalifa, dubai" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p className="card-subtitle">
                    <a href="#">Dubai</a>
                  </p>

                  <h3 className="h3 card-title">
                    <a href="#">Burj khalifa</a>
                  </h3>

                  <p className="card-text">
                    Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div className="popular-card">

                <figure className="card-img">
                  <img src="./assets/images/popular-3.jpg" alt="Kyoto temple, japan" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p className="card-subtitle">
                    <a href="#">Japan</a>
                  </p>

                  <h3 className="h3 card-title">
                    <a href="#">Kyoto temple</a>
                  </h3>

                  <p className="card-text">
                    Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                  </p>

                </div>

              </div>
            </li>

          </ul>

          <button className="btn btn-primary">More destintion</button>

        </div>
      </section>



      <section className="package" id="package">
        <div className="container">

          <p className="section-subtitle">Popular Packeges</p>

          <h2 className="h2 section-title">Checkout Our Packeges</h2>

          <p className="section-text">
            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
            Sit ornare
            mollitia tenetur, aptent.
          </p>

          <ul className="package-list">

            <li>
              <div className="package-card">

                <figure className="card-banner">
                  <img src="./assets/images/packege-1.jpg" alt="Experience The Great Holiday On Beach" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <h3 className="h3 card-title">Experience The Great Holiday On Beach</h3>

                  <p className="card-text">
                    Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque,
                    cras, aspernatur.
                  </p>

                  <ul className="card-meta-list">

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p className="text">7D/6N</p>
                      </div>
                    </li>

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="people"></ion-icon>

                        <p className="text">pax: 10</p>
                      </div>
                    </li>

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="location"></ion-icon>

                        <p className="text">Malaysia</p>
                      </div>
                    </li>

                  </ul>

                </div>

                <div className="card-price">

                  <div className="wrapper">

                    <p className="reviews">(25 reviews)</p>

                    <div className="card-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>

                  </div>

                  <p className="price">
                    $750
                    <span>/ per person</span>
                  </p>

                  <button className="btn btn-secondary">Book Now</button>

                </div>

              </div>
            </li>

            <li>
              <div className="package-card">

                <figure className="card-banner">
                  <img src="./assets/images/packege-2.jpg" alt="Summer Holiday To The Oxolotan River" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <h3 className="h3 card-title">Summer Holiday To The Oxolotan River</h3>

                  <p className="card-text">
                    Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque,
                    cras, aspernatur.
                  </p>

                  <ul className="card-meta-list">

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p className="text">7D/6N</p>
                      </div>
                    </li>

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="people"></ion-icon>

                        <p className="text">pax: 10</p>
                      </div>
                    </li>

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="location"></ion-icon>

                        <p className="text">Malaysia</p>
                      </div>
                    </li>

                  </ul>

                </div>

                <div className="card-price">

                  <div className="wrapper">

                    <p className="reviews">(20 reviews)</p>

                    <div className="card-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>

                  </div>

                  <p className="price">
                    $520
                    <span>/ per person</span>
                  </p>

                  <button className="btn btn-secondary">Book Now</button>

                </div>

              </div>
            </li>

            <li>
              <div className="package-card">

                <figure className="card-banner">
                  <img src="./assets/images/packege-3.jpg" alt="Santorini Island's Weekend Vacation" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <h3 className="h3 card-title">Santorini Island's Weekend Vacation</h3>

                  <p className="card-text">
                    Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque,
                    cras, aspernatur.
                  </p>

                  <ul className="card-meta-list">

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p className="text">7D/6N</p>
                      </div>
                    </li>

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="people"></ion-icon>

                        <p className="text">pax: 10</p>
                      </div>
                    </li>

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="location"></ion-icon>

                        <p className="text">Malaysia</p>
                      </div>
                    </li>

                  </ul>

                </div>

                <div className="card-price">

                  <div className="wrapper">

                    <p className="reviews">(40 reviews)</p>

                    <div className="card-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>

                  </div>

                  <p className="price">
                    $660
                    <span>/ per person</span>
                  </p>

                  <button className="btn btn-secondary">Book Now</button>

                </div>

              </div>
            </li>

          </ul>

          <button className="btn btn-primary">View All Packages</button>

        </div>
      </section>





    
      <section className="gallery" id="gallery">
        <div className="container">

          <p className="section-subtitle">Photo Gallery</p>

          <h2 className="h2 section-title">Photo's From Travellers</h2>

          <p className="section-text">
            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
            Sit ornare
            mollitia tenetur, aptent.
          </p>

          <ul className="gallery-list">

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="./assets/images/gallery-1.jpg" alt="Gallery image"/>
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="./assets/images/gallery-2.jpg" alt="Gallery image"/>
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="./assets/images/gallery-3.jpg" alt="Gallery image"/>
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="./assets/images/gallery-4.jpg" alt="Gallery image"/>
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="./assets/images/gallery-5.jpg" alt="Gallery image"/>
              </figure>
            </li>

          </ul>

        </div>
      </section>






      <section className="cta" id="contact">
        <div className="container">

          <div className="cta-content">
            <p className="section-subtitle">Call To Action</p>

            <h2 className="h2 section-title">Ready For Unforgatable Travel. Remember Us!</h2>

            <p className="section-text">
              Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque
              laudantium. Sit ornare
              mollitia tenetur, aptent.
            </p>
          </div>

          <button className="btn btn-secondary">Contact Us !</button>

        </div>
      </section>

    </article>
  </main>




  <footer className="footer">

    <div className="footer-top">
      <div className="container">

        <div className="footer-brand">

          <a href="#" className="logo">
            <img src="./assets/images/logo.svg" alt="Tourly logo"/>
          </a>

          <p className="footer-text">
            Urna ratione ante harum provident, eleifend, vulputate molestiae proin fringilla, praesentium magna conubia
            at
            perferendis, pretium, aenean aut ultrices.
          </p>

        </div>

        <div className="footer-contact">

          <h4 className="contact-title">Contact Us</h4>

          <p className="contact-text">
            Feel free to contact and reach us !!
          </p>

          <ul>

            <li className="contact-item">
              <ion-icon name="call-outline"></ion-icon>

              <a href="tel:+01123456790" className="contact-link">+01 (123) 4567 90</a>
            </li>

            <li className="contact-item">
              <ion-icon name="mail-outline"></ion-icon>

              <a href="mailto:info.tourly.com" className="contact-link">info.tourly.com</a>
            </li>

            <li className="contact-item">
              <ion-icon name="location-outline"></ion-icon>

              <address>3146 Koontz, California</address>
            </li>

          </ul>

        </div>

        <div className="footer-form">

          <p className="form-text">
            Subscribe our newsletter for more update & news !!
          </p>

          <form action="" className="form-wrapper">
            <input type="email" name="email" className="input-field" placeholder="Enter Your Email" required/>

            <button type="submit" className="btn btn-secondary">Subscribe</button>
          </form>

        </div>

      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">

        <p className="copyright">
          &copy; 2022 <a href="">codewithsadee</a>. All rights reserved
        </p>

        <ul className="footer-bottom-list">

          <li>
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
          </li>

          <li>
            <a href="#" className="footer-bottom-link">Term & Condition</a>
          </li>

          <li>
            <a href="#" className="footer-bottom-link">FAQ</a>
          </li>

        </ul>

      </div>
    </div>

  </footer>





  <a href="#top" className="go-top" data-go-top>
    <ion-icon name="chevron-up-outline"></ion-icon>
  </a>




  <script src="./assets/js/script.js"></script>


  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

    </div>
  );
}

export default TourlyLanding;
