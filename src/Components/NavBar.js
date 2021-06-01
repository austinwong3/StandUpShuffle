import {Component} from 'react'
import Button from 'react-bootstrap/Button';
import logo from './Images/SUS_bold_top.png'
import { Link } from "react-router-dom";
class NavBar extends Component{
    render(){
        return(
            <div class="d-flex border-bottom">
                <div class='w-50 ml-5'>
                    <img src={logo} style={{width: '50px', margin: '10px'}}/>
                </div>
                <div class='d-flex w-50 mr-5 justify-content-end align-items-center'>
                    <Link to='' class='link'>Home</Link>
                </div>
            </div>
        )
    }
}

export default NavBar