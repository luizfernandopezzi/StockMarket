import iconDashboard from '../assests/images/icon-dashboard.svg'

const Header = () => {
    return (
        <div className='header'>
            <img src={iconDashboard} alt="Logo Monetus"></img>
            <h1>Dashboard</h1>
        </div>
    )
}

export default Header;