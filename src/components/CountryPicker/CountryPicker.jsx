import React , {useState,useEffect}from "react";
import {NativeSelect, FormControl} from '@material-ui/core';
import Style  from "./CountryPicker.module.css";
import {Fetchcountries} from "../../api";

const CountryPicker =( {handleCountryChange}) => {
    const [Fetchedcountries, setFetchCountry] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            try {
               
                setFetchCountry(await Fetchcountries());
            } catch (error) {
                console.log(`Error ${error}`)
            }
           
        }


        fetchAPI(); 
    }, [setFetchCountry]);
   console.log(Fetchedcountries);
    return ( 
    

    
    <FormControl className={Style.formControl}>

        <NativeSelect defaultValue='' onChange= {(e) => handleCountryChange(e.target.value) }>  
            <option value="">
                Global
            </option>
             {Fetchedcountries.map((country,i) => <option key={i} value={country}>{country}</option> )} 
        </NativeSelect>
    </FormControl>
    
    
    );
}

export default CountryPicker;