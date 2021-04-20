import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

class NumberRow extends React.Component {
    
    
    render(){
        let {value, id, isSelected, isLocked, onRemoveClick, onSelectClick} = this.props;
        console.log(isLocked);
        return(
        <tr>
            <td>
                {value}
            </td>
            <td>
                {id}
            </td>
            <td>
                <button disabled = {isLocked ? 'true' : ''} className={isSelected ? 'btn btn-danger' : 'btn btn-primary'} 
                onClick={isSelected ? onRemoveClick : onSelectClick}>
                    {isSelected ? 'Remove From Selected' : 'Add To Selected'}
                </button>
            </td>
        </tr>
        )
    }
}
export default NumberRow;