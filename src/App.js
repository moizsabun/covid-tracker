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
        country: '',
    }



    async componentDidMount()
    {
        const fetcheddata = await fecthData();
        this.setState( {data: fetcheddata});
       
    }


    handleCountryChange =async(country) => {
        const fetcheddata = await fecthData(country);
        console.log(country)
        this.setState( {data: fetcheddata ,country : country});
        console.log (fetcheddata);

    }
    render() {
        const {data,country} = this.state;
        console.log({data});
    return (
       
        <div className={styles.container}> 
            <Cards data={data}>
                
            </Cards>
<CountryPicker handleCountryChange = {this.handleCountryChange}></CountryPicker>

            <Charts data={data} country={country}>

            </Charts>
        </div>
    );
    }
}

export default App;