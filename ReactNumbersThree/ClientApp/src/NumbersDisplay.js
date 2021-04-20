import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import AddButton from './AddButton';
import { v4 as uuidv4 } from 'uuid';
import { produce } from 'immer';
import NumberRow from './NumberRow';
import SelectedNumbersRow from './SelectedNumbersRow';

class NumbersDisplay extends React.Component{

    state = {
        allNumbers : [],
        number :{
            id : '', 
            value : ''
        },
        selectedNumbers : [],
        lockedNumbers : []

    }
    
    onAddClick = e =>{
        let number= {value: Math.floor(Math.random()*(100-1+1)+1), id: uuidv4()};
        const nextState = produce(this.state, draftState => {
            draftState.allNumbers.push(number);
            draftState.number.v = '';
            draftState.number.id = '';
        });
        this.setState(nextState);

    }
    
    isNumberSelected = number =>{
     
        let found = this.state.selectedNumbers.find(n => n.id === number.id);
        return !!found;
    }
        
    onSelectClick = number => {
        let nextState = produce(this.state, draftState =>{
            draftState.selectedNumbers.push(number);
        });
        this.setState(nextState);
    }
    onRemoveClick = number =>{
        let filtered = this.state.selectedNumbers.filter(n => n.id !== number.id);
        this.setState({selectedNumbers : filtered});
    }
    generateNumberTable = () => {
        return(
          <table className='table table-hover table-bordered table-striped mt-5'>
              <thead className='table-dark'> 
                  <tr> 
                      <th>
                          Number
                      </th>
                      <th>
                          Id
                      </th>
                      <th>
                          Add/Remove
                      </th>
                  
                  </tr>
              </thead>
              <tbody>
                {this.state.allNumbers.map((number, idx) => {
                    let currentNumber = number;
                    return <NumberRow key={idx}
                    value = {currentNumber.value}
                    id = {currentNumber.id}
                    isSelected = {this.isNumberSelected(currentNumber)}
                    onSelectClick = {() => this.onSelectClick(currentNumber)}
                    onRemoveClick = {() => this.onRemoveClick(currentNumber) }
                    isLocked = {this.isNumberLocked(currentNumber)}
                    >

                    </NumberRow>
                })
                }
              </tbody>
          </table>
        )
    }
    isNumberLocked = number => {
        
        let found = this.state.lockedNumbers.find(n => n.id === number.id);
        return !!found;
    }
    onLockClick = number => {
        let nextState = produce(this.state, draftState =>{
            draftState.lockedNumbers.push(number);
        });
        this.setState(nextState);
    }
    onUnlockClick = number =>{
        let filtered = this.state.lockedNumbers.filter(n => n.id !== number.id);
        this.setState({lockedNumbers : filtered});
    }
    generateSelectedNumbers = () =>{
   
        return (
            
            <div className='jumbotron'>
                <div class="col-md-6 col-md-offset-3">
                    <h3>Selected Numbers </h3>
                     <ul class="list-group">
                        {this.state.selectedNumbers.map((number, idx) => {
                            let currentNumber = number;
                            return <SelectedNumbersRow
                                key = {idx}
                                value = {currentNumber.value}
                                isLocked = {this.isNumberLocked(currentNumber)}
                                onLockClick = {() => this.onLockClick(currentNumber)}
                                onUnlockClick = {() => this.onUnlockClick(currentNumber)}
                            >

                            </SelectedNumbersRow>
                        })}
                     </ul>
                 </div>
            </div>
        )
    }

        render(){
            return(
            <div className='container'>
                <div className='row'>
                    <div className=' mt-5 col-md-12'>
                   
                        <AddButton addClick = {this.onAddClick}></AddButton>   

                        {this.generateNumberTable()}   
                           
                        {!!this.state.selectedNumbers.length && this.generateSelectedNumbers()}
                      
                      
                    </div>
                </div>
            
            </div>);
        }    
    }

export default NumbersDisplay;