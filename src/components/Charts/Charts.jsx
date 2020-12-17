import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchedDailyDataTotal } from "../../api";


const Charts = () => {

    const [dailyData, setData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            try {
               
                setData(await fetchedDailyDataTotal());
            } catch (error) {
                console.log(`Error ${error}`)
            }
           
        }


        fetchAPI(); 
    });

    const LineChart = (

        dailyData.length ? (
          
            <Line
            
                data={

                    {
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{

                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: true,
                        }, {

                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundCoolor: 'rgba(255,0,0,0.5)',
                            fill: true,
                        }
                        ]
                    }
                }
            />
        ) : null
        
    );

    return (


        <div>
            {LineChart}
 
        </div>

    );
}

export default Charts;