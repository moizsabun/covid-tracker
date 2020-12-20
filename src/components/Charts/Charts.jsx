import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchedDailyDataTotal } from "../../api";
import style from "./Charts.module.css";


const Charts = ({ data : {confirmed,recovered,deaths },country}) => {

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
    },[]);
    
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
    const BarChart = (
        confirmed ? (
          <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                  data: [confirmed.value, recovered.value, deaths.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current state in ${country}` },
            }}
          />
        ) : null
      );
    

    return (


        <div className={style.container}>
    
  {country ? BarChart : LineChart}
        </div>

    );
}

export default Charts;