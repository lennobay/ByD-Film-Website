import "./contact.css";

export default function DeviderContact() {
  return (
    <div className="contact-up">
      <div className="contact-left">
        <div className="contact-left-sub">
          <p>
            <i className="fa-solid fa-envelope"></i> info@byd-film.de
          </p>
        </div>
        <div
          onClick={() =>
            (window.location = "https://www.instagram.com/byd_film/")
          }
          className="contact-left-sub"
        >
          <p>
            <i className="fa-brands fa-square-instagram"></i> @byd-film
          </p>
        </div>
      </div>
      <div className="contact-right">
        <div className="contact-right-sub">
          <h2>
            Wollen Sie mich kontaktieren. Oder auch auf Instagram besuchen!
          </h2>
        </div>
      </div>
    </div>
  );
}
