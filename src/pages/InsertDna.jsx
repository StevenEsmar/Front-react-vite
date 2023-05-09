import Button from "../components/Button"
import {CONSTANTS} from "../Constants"
import { useState, useEffect } from "react"
import "../styles/form.scss"
import Header from "../components/Header"

const InsertDna = () => {

  const [valueMatrix, setValueMatrix] = useState("");
  const [responsePost, setResponse] = useState("");
  const [showResultDiv, setResult] = useState(false);
  const [isMutant, setMutantValue] = useState("");
  const [dnaExist, setExistDna] = useState(false);
  const [errorInput, setErrorInput] = useState(false);

  useEffect(()=>{
  },[valueMatrix]); 

  useEffect(()=>{
    setMutantValue(responsePost.mutant)
  },[responsePost]);

  const handleInput = (event) => {
    event.preventDefault();
    setResult(false);
    setExistDna(false);
    let regex = new RegExp("^[aAtTcCgG,]+$");
    if (event.target.value == ""){
      event.target.value = "";
      setValueMatrix(event.target.value);
    }else{
      if (regex.test(event.target.value)) {
        setValueMatrix(event.target.value.toUpperCase());
      } else {
        event.target.value = valueMatrix
      }
    }
    if(valueMatrix.length >= 19){
      setErrorInput(false)
    }
  }

  const submitDna = async() => {
    if(valueMatrix.length <19){
      setErrorInput(true)
    }else{
      setErrorInput(false)
      await fetch('http://localhost:8080/mutant', {
          method: 'POST',
          mode: 'cors',
          'headers': {
              'Access-Control-Allow-Origin': '*',
              'Content-Type':'application/json',
              'Access-Control-Allow-Methods':'POST,GET,OPTIONS'
          },
          body:JSON.stringify({"dna":valueMatrix.split(",")}),
      })
      .then(response => {
        if(response.status == 200 || response.status == 403) {
          setResult(true)
        }else if(response.status == 210){
          setResult(false)
          setExistDna(true)
        }
        return response.json();
      })
      .then(data =>setResponse(data))
    }
  }

  return (
    <>
      <Header title={CONSTANTS.FORM_INTRO_TITLE} buttonText={CONSTANTS.BUTTON_CLOSE}/>
      <div className="container_form">
        <div className="form_title">
            <h2>{CONSTANTS.FORM_INTRO_TEXT}</h2>
            <h3>{CONSTANTS.FORM_INTRO_DESC_A}</h3>
            <h3>{CONSTANTS.FORM_INTRO_DESC_B}</h3>
            <h3>{CONSTANTS.FORM_INTRO_DESC_C}</h3>
            <h3>{CONSTANTS.FORM_INTRO_DESC_D}</h3>
        </div>
        <div className="total_inputs_dna">
          <input type="text" className="input_dna" onChange={handleInput}/>
        </div>
        <div className="div_buttons">
          <Button label={CONSTANTS.BUTTON_SUBMIT} handleClick={submitDna} isDisabled={valueMatrix.length<1 ? true: false}/>
        </div>
        {showResultDiv == true ? 
        <div>
          <div className="form_title">
            <h2>{CONSTANTS.FORM_MODAL_TITLE}</h2>
          </div>
          <div className="modal_result">
            <h3>{isMutant=="true"? CONSTANTS.FORM_MODAL_MUNTANT : CONSTANTS.FORM_MODAL_HUMAN}</h3>
          </div>
        </div>:
        <></>
        }
        {dnaExist == true ?
        <div className="form_error">
            <h2>{CONSTANTS.FORM_MODAL_ADN} </h2>
        </div>:<></>
        }
        {errorInput == true ?
        <div className="form_error">
            <h2>{CONSTANTS.FORM_MODAL_ERROR} </h2>
        </div>:<></>
        }
      </div>
    </>
  )
}

export default InsertDna