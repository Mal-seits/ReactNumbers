import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

class SelectedNumbersRow extends React.Component{

    render(){
        let {value, onLockClick, onUnlockClick, isLocked} = this.props;
        return(
       
        <li class="list-group-item">
            {value}
            <button className={isLocked ? "ml-3 btn btn-danger" :  "ml-3 btn btn-success" } 
            onClick = {isLocked ? onUnlockClick : onLockClick} >
                {isLocked ? 'Unlock' : 'Lock'}</button>
            </li>
        )
    }
}
export default SelectedNumbersRow;