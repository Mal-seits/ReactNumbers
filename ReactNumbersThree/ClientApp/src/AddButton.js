import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

class AddButton extends React.Component{
   
    render(){
        
         return(
            <button className='btn btn-block btn-warning btn-lg' onClick={this.props.addClick}>ADD NUMBER</button>
        )
    }
}
export default AddButton;