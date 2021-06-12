import {Component} from 'react'
import Button from 'react-bootstrap/Button';

class ShufflePage extends Component{

    constructor(props) {
        super(props);
        this.state = {
          teamname: 'LCD',
          members: this.props.team.members.sort(() => Math.random() - 0.5)
        }
      }

      componentDidUpdate(prevProps) {
        if(prevProps != this.props)
            this.setState({members: this.props.team.members.sort(() => Math.random() - 0.5)})
      } 
      
    shuffleMembers(){
        this.setState({members: this.state.members.sort(() => Math.random() - 0.5)})
    }

    copy(e){
        e.preventDefault()
        navigator.clipboard.writeText(this.state.members.toString().replace(/,/g, ', '))
    }
    
    render(){
        return(
            <div class="d-flex flex-column align-items-center">
                <h1 style={{color: '#569CBF', margin: '20px'}}>{this.props.team.name}</h1>
                {this.state.members.map((member) => 
                    <h1><span style={{width: '200px', 'font-size': '30px'}} class='badge badge-secondary'>{member}</span></h1>)}
                <button class="btn btn-primary m-1" onClick={this.shuffleMembers.bind(this)} style={{'background-color': '#569CBF', 'border-color': '#569CBF'}}>Shuffle</button>
                <form class= 'm-5' onSubmit= {this.copy.bind(this)}>
                    <input style={{width: '400px'}} value={this.state.members.toString().replace(/,/g, ', ')}></input>
                    <input type='submit' value='Copy' className='submitBtn'/>
                </form>
            </div>
        )
    }
}

export default ShufflePage