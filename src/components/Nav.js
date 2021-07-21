import logoMonetus from '../assests/images/logomonetus.svg'
import homepage from '../assests/images/homepage.svg'
const Nav = () => {
    return(
        <aside className="nav">
            <div className="logo-nav">
                <img className="logo-monetus" src={logoMonetus} alt="Logo Monetus"></img>
            </div>
            
            <img className="nav-item" src={homepage} alt="Dashboard"></img>
        </aside>
    )
}

export default Nav;