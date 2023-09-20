import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header-main">
        <button className="button-85">
          <img src="/profile2.jpg" className="header-image" alt="..."></img>
        </button>
        <div className="header-text">
          <h1 className="animate-charcter">Alex Titov</h1>
          <h3>Full-Stack Developer</h3>
          <h6>Comp Sci & Eng @ UC Merced</h6>
          <div className="links">
            <a
              className="link-text"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alextitov203@gmail.com"
            >
              <i className="bi bi-envelope"></i>
            </a>
            <a
              className="link-middle-margin"
              href="https://github.com/alextitov19"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              className="link-text"
              href="https://www.linkedin.com/in/alex-titov-b072451a9/"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="about-me">
        I am college student with a passion for software development. I enjoy
        working on projects that utelize new technologies to help other people.
        When I'm not at my laptop, I like to spend time outdoors with my puppy.
      </div>
    </div>
  );
}

export default Header;
