import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDiceOne,faDiceTwo,faDiceThree,faDiceFour,faDiceFive,faDiceSix} from "@fortawesome/free-solid-svg-icons";


export default function Die(props){
    const styles={
        backgroundColor:props.isHeld ? "#59E391" : "black",
        borderColor:props.isHeld ? "#59E391" : "black",
    }
    const diceArray=[faDiceOne,faDiceTwo,faDiceThree,faDiceFour,faDiceFive,faDiceSix]
    return(
        <div onClick={props.holdDice} style={styles} className="Die"><FontAwesomeIcon icon={diceArray[(props.value)-1]}/>
        </div>
    )
}