import {CONSTANTS} from "../Constants"
import Header from "../components/Header"
import { useState, useEffect } from "react"
import {Chart} from "react-google-charts"
import "../styles/stats.scss"

const Stats = () => {
  const [responseGet, setResponse] = useState("");
  const data = [
    ["Evaluados", "Humanos vs Mutantes"],
    ["Humanos", responseGet?.ADN?.count_human_dna],
    ["Mutantes", responseGet?.ADN?.count_mutant_dna]
  ];
  const options = {
    is3D: true,
    backgroundColor: "transparent"
  };

  useEffect(() => {
      fetch(CONSTANTS.URL_API_EXPRESS + "stats")
      .then(response => response.json())
      .then(data => {setResponse(data)})
  },[])

  return (
    <>
      <Header title={CONSTANTS.STATS_INTRO_TITLE} buttonText={CONSTANTS.BUTTON_CLOSE}/>
      <div className="data_stats_container">
        <div>
          Mutantes encontrados:
          <span> {responseGet?.ADN?.count_mutant_dna}</span>
        </div>
        <div>
          Humanos encontrados: 
          <span>{responseGet?.ADN?.count_human_dna}</span>
        </div>
        <div>
          Ratio:
          <span>{responseGet?.ADN?.ratio}</span>
        </div>
      </div> 
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"400px"}
        height={"400px"}
      />
    </>
  )
}

export default Stats