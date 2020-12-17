import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./Cards.module.css";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

console.log("Last update " + lastUpdate);
    if (!confirmed) {
        return 'loading....'
    }

    return (

        /* <h1>{confirmed.value}</h1> */

        <div className={styles.container}>
            <Grid container spacing={3} justify="center">

                <Grid item component={Card} xs={13} md={3} className={cx(styles.card,styles.infected) } >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            INFECTED
        </Typography>
                        <Typography variant="h5">
                           <CountUp
                           start={0}
                           end={confirmed.value}
                           duration={3.0}
                           separator =","
                           ></CountUp>
        </Typography>
                        <Typography color="textSecondary" gutterBottom>
    {new Date(lastUpdate).toDateString()}
        </Typography>
                    </CardContent>
                    <Typography variant="body2">
                        Number of Active Cases of Covid-19
        </Typography>
                </Grid>

                <Grid item component={Card} xs={13} md={3} className={cx(styles.card,styles.recovered) }  >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            RECOVERED
        </Typography>
                        <Typography variant="h5">
                        <CountUp
                           start={0}
                           end={recovered.value}
                           duration={3.0}
                           separator =","
                           ></CountUp>
        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                        {new Date(lastUpdate).toDateString()}
        </Typography>
                    </CardContent>
                    <Typography variant="body2">
                        Number of RECOVERED Cases of Covid-19
        </Typography>
                </Grid>

                <Grid item component={Card} xs={13} md={3} className={cx(styles.card,styles.deaths) } >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
        </Typography>
                        <Typography variant="h5">
                        <CountUp
                           start={0}
                           end={deaths.value}
                           duration={3.0}
                           separator =","
                           ></CountUp>
        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                        {new Date(lastUpdate).toDateString()}
        </Typography>
                    </CardContent>
                    <Typography variant="body2">
                        Number of Deaths of Covid-19
        </Typography>
                </Grid>
            </Grid>
        </div>



    );

}

export default Cards;