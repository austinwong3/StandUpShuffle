import {Component} from 'react'
import Button from 'react-bootstrap/Button';
import logo from './Images/SUS_bold_top.png'
class NavBar extends Component{

    constructor() {
        super();
        this.state = {
          lcd: ['DDM', 'Dorie', 'Jacob', 'Graham', 'Evan', 'Ivailo', 'Kim', 'Austin']
        }
      }
    
    render(){
        return(
            <div class="d-flex border-bottom justify-content-center">
                <img src={logo} style={{width: '75px', margin: '10px'}}/>
            </div>
        )
    }
}

export default NavBar