import {Component} from 'react'
import logo from './Images/SUS_bold_top.png'
import { Link } from "react-router-dom";

import './SideNav.css'
class SideBar extends Component{

    constructor() {
        super();
        this.state = {
          lcd: ['DDM', 'Dorie', 'Jacob', 'Graham', 'Evan', 'Ivailo', 'Kim', 'Austin']
        }
      }
    
    render(){
        return(
            <div class="sideNav" style={{width: '100px'}}>
                {this.props.teams.map((team) => 
                <Link to={'/team/' + team} class='sideNavItem' style={{color: '#569CBF'}}>{team}</Link>
                )}
            </div>
        )
    }
}

export default SideBar