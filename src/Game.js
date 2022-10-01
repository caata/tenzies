import React from 'react';
import Die from './Die';
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti';

export default function Game() {
    const [dice,setDice]=React.useState(allNewDice())
    const [tenzies,setTenzies] = React.useState(false)

    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [dice])

    function generateNewDie() {
        return {
            value : Math.floor(Math.random() *6)+1, 
            isHeld : false,
            id : nanoid()
            
        }
    }

    function allNewDice(){
        const NewArray=[]
        for(let i=0 ; i< 10 ; i++){
            NewArray.push(generateNewDie())
        }
        return NewArray
    }

    function holdDice(id){
        setDice(oldDice=>oldDice.map(dice => {
            return dice.id === id ? {...dice, isHeld:!dice.isHeld} : dice
        }))
    }
    
    const dieElements = dice.map((die)=>
        <Die 
            isHeld={die.isHeld} 
            key={die.id} 
            value={die.value}  
            holdDice={() => holdDice(die.id)}
        />)

    function rollNewDice () {
        if(!tenzies){
             setDice(prevDice => prevDice.map(die => {
            return die.isHeld ? die : generateNewDie()
        }))
        }else{
            setTenzies(false)
            setDice(allNewDice())
        }
       
    }

    return (
        <main>
            {tenzies && <Confetti className='confetti'/>}
            <div className='about-container'>
                <h1 className="title">Tenzies</h1>
                <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </div>
            <div className='die-container'>
                {dieElements}
            </div>
            <button onClick={rollNewDice} className='roll'>{tenzies ? "newGame": "Roll"}</button>
        </main>
    )
}