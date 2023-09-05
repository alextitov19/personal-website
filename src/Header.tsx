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
        <div className='header-links'>
            <h1 >Contact</h1>
        </div>
    </div >
}

export default Header;