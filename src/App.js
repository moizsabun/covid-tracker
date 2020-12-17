import React, { Component } from 'react'
import {Cards,Charts,CountryPicker} from "./components"
import styles from "./App.module.css";
import {fecthData} from "./api";

// export default function App() {

//     
//     return (
//         <div className={styles.container}> 
//             <Cards>
                
//             </Cards>
// <CountryPicker></CountryPicker>

//             <Charts>

//             </Charts>
//         </div>
//     )
// }


class App extends Component{
    state = {
        data : {},
    }

    async componentDidMount()
    {
        const fetcheddata = await fecthData();
        this.setState( {data: fetcheddata});
        console.log(fetcheddata);
    }

    render() {
        const {data} = this.state;
    return (
       
        <div className={styles.container}> 
            <Cards data={data}>
                
            </Cards>
<CountryPicker></CountryPicker>

            <Charts>

            </Charts>
        </div>
    );
    }
}

export default App;