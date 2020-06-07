import axios from 'axios';
import { cloneDeep } from 'lodash';
import React, { useMemo, useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function ClientForm(): JSX.Element {
  const [consumption, setConsumption] = useState<any>({
    labels: [],
    datasets: [
      {
        label: "consumption preferences shopping",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)"
        ],
        borderWidth: 1,
        borderColor: "#777",
        hoverBorderWidth: 3,
        hoverBorderColor: "#000"
      }
    ]
  });

  const fetchPersonalitiesClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const response = await axios.post("ibm/personalities/", {
      text: `I’ll be honest, I have been email haranguing Tesla and SpaceX founder and CEO Elon Musk for 
        months about talking to me and today on Recode Decode, we have a special interview with one of the most-loved,
         often-controversial and generally most-talked-about figures in tech.
        On Halloween night, we sat down at Tesla HQ in Palo Alto for an 80-minute conversation about how those companies are faring,
         why he was working 120-hour weeks, his public animosity for the press, Donald Trump’s Space Force, accepting money from Saudi Arabia and more.
        Also on the menu: Musk’s rabid fans on Twitter, dying on Mars, a Tesla pickup truck that will look like something out of
         “Blade Runner” and talk of an electric bike and VTOL plane `
    });

    const data = JSON.parse(response.data);
    const consumptionApi = data.result.consumption_preferences;

    console.log("Consumption", consumptionApi);

    const consumptionNew = cloneDeep(consumption);

    console.log("New", consumptionNew);

    setConsumption((prev: any) => {
      prev.labels = consumptionApi[0].consumption_preferences.map(
        (cons: any) => cons.name
      );

      prev.datasets[0].data = consumptionApi[0].consumption_preferences.map(
        (cons: any) => cons.score
      );

      console.log("PREV", prev);

      return prev;
    });
  };

  const chartDefaultProps = useMemo(
    () => ({
      displayTitle: true,
      displayLegent: true,
      legendPosition: "right"
    }),
    []
  );

  return (
    <Box>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Button
          color="primary"
          onClick={fetchPersonalitiesClick}
          variant="contained"
        >
          Get personalities
        </Button>
      </Box>
      <Box mb={2}>
        <Pie
          data={consumption}
          options={{
            title: {
              display: chartDefaultProps.displayTitle,
              text: "DATA ANALYSIS",
              fontSize: 25
            },
            legend: {
              display: chartDefaultProps.displayLegent,
              position: chartDefaultProps.legendPosition,
              labels: {
                fontColor: "#000"
              }
            },
            layout: {
              padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
              }
            },
            tooltips: {
              enabled: true
            }
          }}
        />
      </Box>
      <Box mb={2}>
        <Line
          data={consumption}
          options={{
            title: {
              display: chartDefaultProps.displayTitle,
              text: "DATA ANALYSIS",
              fontSize: 25
            },
            legend: {
              display: chartDefaultProps.displayLegent,
              position: chartDefaultProps.legendPosition,
              labels: {
                fontColor: "#000"
              }
            },
            layout: {
              padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
              }
            },
            tooltips: {
              enabled: true
            }
          }}
        />
      </Box>
    </Box>
  );
}

export default ClientForm;
