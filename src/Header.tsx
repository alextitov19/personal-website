import './Header.css'

function Header() {
    return <div className="header-main">
        <button className='button-85'>
            <img src='../public/profile.jpg' className="header-image" alt="..."></img>
        </button>
        <div className='header-text'>
            <h1 className='animate-charcter'>Alex Titov</h1>
            <h3>Full-Stack Developer</h3>
            <h6>Comp Sci & Eng @ UC Merced</h6>
            <div className='links'>
                <a className="link-text" href="https://mail.google.com/mail/?view=cm&fs=1&to=alextitov203@gmail.com">
                    <i className="bi bi-envelope"></i>
                </a>
                <a className="link-middle-margin" href="https://github.com/alextitov19">
                    <i className="bi bi-github"></i>
                </a>
                <a className="link-text" href="https://www.linkedin.com/in/alex-titov-b072451a9/">
                    <i className="bi bi-linkedin"></i>
                </a>

            </div>
        </div>
    </div >
}

export default Header;