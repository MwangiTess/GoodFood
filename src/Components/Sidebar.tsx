import dashboard from '../Assets/Icons/dashboard.svg'
import foodorder from '../Assets/Icons/foodOrder.svg'
import managemenu from '../Assets/Icons/manageMenu.svg'
import customerreview from '../Assets/Icons/manageMenu.svg'
import settings from '../Assets/Icons/settings.svg'
import payments from '../Assets/Icons/payment.svg'
import accounts from '../Assets/Icons/accounts.svg'
import help from '../Assets/Icons/help.svg'

type Props = {
 
}
export const Sidebar = ({}: Props) => {
    return (
        <div>      
            <ul className='sidebar-list'>
            <p className='title'>MENU</p>
                <li className='sidebar-list-item'>
                    <a href="" className='dashboard'>
                    <img src={dashboard} alt="icon" /> Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <img src={foodorder} alt="icon" /> Food Order
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <img src={managemenu} alt="icon" /> Manage Menu
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <img src={customerreview} alt="icon" /> Customer Review
                    </a>
                </li>
                <p className='title'>OTHERS</p>
                <li className='sidebar-list-item'>
                    <a href="">
                        <img src={settings} alt="icon" />  Settings
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                         <img src={payments} alt="icon" /> Payments
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                         <img src={accounts} alt="icon" /> Accounts
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                         <img src={help} alt="icon" /> Help
                    </a>
                </li>
            </ul>
        </div>
      )
        
    
}