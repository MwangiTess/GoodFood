import logo from '../Assets/logo.svg'
import dropdown from '../Assets/Icons/dropdown.svg'
import notification from '../Assets/Icons/notification.svg'
import burger2 from '../Assets/Icons/burger2.svg'

type Props = {
 
}
export const Header = ({}: Props) => {
    return ( 
        <header className="header">
            <div className='logo-icon'>
                <img src={logo} alt="goodfood icon " className='logo'/>
            </div>
            <div>
                <input type="text" className='search-input' placeholder="search" />
            </div>
            <div className='burger-container'>
                <div className='burger-circle'> </div>
                <img src={burger2} alt="burger icon" className='burger-icon'/>
                <p className='burger-name'>Delicious Burger</p>
                <img src={dropdown} alt="dropdown" className='dropdown-icon'/>
                <img src={notification} alt="notifiaction" className='notification-icon'/>
            </div>
        </header>
    );
}