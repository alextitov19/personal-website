import './Header.css'

function Header() {
    return <div className="header-main">
        <button className='button-85'>
            <img src='../public/profile.jpg' className="header-image" alt="..."></img>
        </button>
        <h3 className='animate-charcter'>Alex Titov</h3>
    </div >
}

export default Header;