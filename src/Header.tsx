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
        </div>
        <div className='header-spacer' />
        <div className='header-links'>
            <h6><a className="link-text" href="https://mail.google.com/mail/?view=cm&fs=1&to=alextitov203@gmail.com">alextitov203@gmail.com</a></h6>
            <h6><a className="link-text" href="#">https://github.com/alextitov19</a></h6>




        </div>
    </div >
}

export default Header;