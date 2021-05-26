import {Component} from 'react'
import Button from 'react-bootstrap/Button';

class ShufflePage extends Component{

    constructor() {
        super();
        this.state = {
          lcd: ['DDM', 'Dorie', 'Jacob', 'Graham', 'Evan', 'Ivailo', 'Kim', 'Austin']
        }
        this.setState({lcd: this.state.lcd.sort(() => Math.random() - 0.5)})
      }
      
    shuffleMembers(){
        this.setState({lcd: this.state.lcd.sort(() => Math.random() - 0.5)})
    }
    
    render(){
        return(
            <div class="d-flex flex-column align-items-center">
                <button class="btn btn-primary m-1" onClick={this.shuffleMembers.bind(this)}>Shuffle</button>
                    {this.state.lcd.map((member) => 
                        <h1><span style={{width: '150px'}}class='badge badge-secondary'>{member}</span></h1>)}
            </div>
        )
    }
}

export default ShufflePage