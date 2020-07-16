import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CountUp from "react-countup";

import { useTheme } from "@material-ui/core/styles";
import { fetchData } from "./api";

const StateDisplay = () => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    async function fetchStates() {
      const res = await fetchData();
      // console.log(res.states);
      setStates(res.states);
    }

    //   // const data = async () => {
    //   //   await fetchData();
    //   //   console.log(data);
    //   //   // setData(result.data.data.states);

    //   //   // setStates(result.data.data.states);
    //   //   // setData(result.data);
    //   // };

    fetchStates();
  }, []);

  const theme = useTheme();

  const useStyles = makeStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",

      margin: "0",
      padding: "0",
    },
    card: {
      width: "300px",
      height: "auto",

      textAlign: "center",

      margin: "0.5rem",
    },
    header: {
      marginBottom: "0",
      marginTop: "0",
      color: "black",
      paddingTop: "1rem",
      textAlign: "center",
      fontSize: "1.5rem",
      fontFamily: "Rambla",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1rem",
      },
    },
  });

  const classes = useStyles();

  return (
    <>
      <h2 className={classes.header}>The Covid-19 figures by States</h2>
      <div className={classes.root}>
        {states.map((s, index) => (
          <div key={index}>
            <Paper elevation={4} className={classes.card}>
              <Typography color="textSecondary" variant="h5" gutterBottom>
                State: {s.state}
              </Typography>
              <Typography color="textSecondary" variant="h5" gutterBottom>
                Confirmed Cases:{" "}
                <CountUp
                  start={0}
                  end={s.confirmedCases}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary" variant="h5" gutterBottom>
                Active Cases:
                <CountUp
                  start={0}
                  end={s.casesOnAdmission}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary" variant="h5" gutterBottom>
                Discharged:
                <CountUp
                  start={0}
                  end={s.discharged}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary" variant="h5" gutterBottom>
                Deaths:{" "}
                <CountUp start={0} end={s.death} duration={2.5} separator="," />
              </Typography>
            </Paper>
          </div>
        ))}
      </div>
    </>
  );
};

export default StateDisplay;
