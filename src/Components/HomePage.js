import {Component} from 'react'
import outside from './Images/SUS_Circle.png'
import inside from './Images/SUS_Center.png'

class HomePage extends Component{
    
    render(){
        return(
            <div class="d-flex flex-column justify-content-center align-items-center p-5 m-5">
                <img src={inside} style={{width: '500px'}}/>
                <img src={outside} style={{width: '500px', position: 'absolute', animation: 'App-logo-spin infinite 20s linear'}}/>
            </div>
        )
    }
}

export default HomePage