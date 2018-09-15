import React,{Component} from 'react';

import classes from './Top.css';
import ItemList from '../ItemList/ItemList';

class Top extends Component{
   
state = {
        input: "",
        inputNotes:[]
}
    
handleChange=(event)=>{
    const value = event.target.value;
    this.setState({
        input: value
    });
};

handleClick=()=>{
    const inputNote = this.state.inputNotes.map((name)=>name);
    inputNote.push(this.state.input);
    this.setState({
        inputNotes: inputNote
    })
}

// renderList=()=>{
//     const list = this.state.inputNotes.map((n,i)=>{
//         return (
//             <li key ={i}>
//                 {n}
//             </li>
//         );
//     })
    
//     return (
//         <ul>
//             {list}
//         </ul>
//     );
// }

render() {
    return (
        <div className={classes.Top} 
            style={{
                transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)',
                opacity: this.props.show ? '1' : '0'
            }}>
            <div className={classes.ItemList}>
                <ItemList inputNotes={this.state.inputNotes}/>
             </div>
            <input type="text" onChange={this.handleChange}/>
            <button onClick={this.handleClick}>Add</button>
        </div>
    );
}
}

export default Top; 

