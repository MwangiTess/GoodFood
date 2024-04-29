import freshsalad from "../Assets/Icons/freshSalad.svg"
import chickennoodels from "../Assets/Icons/chickenNoodles.svg"
import smoothiefruit from "../Assets/Icons/smoothieFruits.svg"
import chickenwings from "../Assets/Icons/chickenWings.svg"

type Props = {
 
}
export const OrderedTable = ({}: Props) => {
    return ( 
        <div>
            <table className="table">
            <tr>
                <th><img src={freshsalad}alt="fresh salad" /></th>
                <th>Fresh Salad Bowl</th>
                <th>IDR 45.000</th>
            </tr>
            <tr>
            <th><img src={chickennoodels}alt="chickennoodles" /></th>
                <th>Chicken Noodles</th>
                <th>IDR 75.000</th>
            </tr>
            <tr>
            <th><img src={smoothiefruit}alt="smoothiefruit" /></th>
                <th>Smoothie Fruits</th>
                <th>IDR 45.000</th>
            </tr>
            <tr>
            <th><img src={chickenwings}alt="chickenwings" /></th>
                <th>Hot Chicken Wings</th>
                <th>IDR 45.000</th>
            </tr>
            <th></th>
            </table>
        </div>
    );
}