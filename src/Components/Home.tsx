import { OrderLineChart } from "../Charts/OrderLineChart";
import { OrderTimePie } from "../Charts/OrderTimePie"; 
import { OrderedTable } from "../Charts/OrderedTable";
import upicon from "../Assets/Icons/upIcon.svg";
import downicon from "../Assets/Icons/downIcon.svg";
import { Revenue } from "../Charts/Revenue";


type Props = {
 
}
export const Home = ({}: Props) => {
    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3 className="title">Dashboard</h3>
            </div>
            <div className="section">
            <div className = "charts">
            <div className="view">
                <p className="titledata">Revenue</p>
                <button className="view-button">View Report</button>
            </div>
                    <p className="amount">IDR 7.852.000</p>
                    <p className="percentageinfo">
                    <img src={upicon} alt="up" />
                        <span className="arrowup"> 2.1% </span>vs last week</p>
                    <p className="salesinfo">Sales from 1-12 Dec, 2020</p>
                    <Revenue />
                </div>
            <div>
                <div className="time-pie">
                    <div className="view">
                        <p className="titledata">Order Time</p>
                        <button className="view-button">View Report</button>
                    </div>
                    <p className="salesinfo">From 1-6 Dec, 2020</p>
                    <OrderTimePie />
                    <div className="card">
                        <p>Afternoon</p>
                        <p>1pm -4pm</p>
                        <p>1.890 orders</p>
                    </div>
                </div>
            </div>
            </div>
            <br />
            <hr />
            <br />
            <div className="sectionb">
                <div className="grid1">
                    <p>Your Rating</p>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <div className="rating">
                    <div className="circlerating">
                        <div className="circleblue"> 85% hygiene</div>
                        <div className="circleorange">85% Food taste</div>
                        <div className="circleindigo">92% packaging</div>
                    </div>
                    </div>
                    
                </div>
                <div className="grid2" >
                    <p>Most Ordered Food</p>
                    <p>Adipiscing elit, sed do eiusmod tempor</p>
                    <OrderedTable />
                </div>
                <div className="grid3">
                    <div className="view">
                        <p className="titledata">Order</p>
                        <button className="view-button">View Report</button>
                    </div>
                    <p className="amount" >2.568</p>
                    <p className="percentageinfo"> 
                        <img src={downicon} alt="down" />
                        <span className="arrowdown"> 2.1% </span> 
                        vs last week</p>
                    <p className="salesinfo">Sales from 1-6 Dec, 2020</p>
                    <OrderLineChart />
                </div>
            </div>
        </main>
      );
}