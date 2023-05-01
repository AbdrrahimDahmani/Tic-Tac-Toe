import { Component } from 'react';
import Player from './choosePlayer';
class Status extends Component {

    handleSetPlayer(e){
        this.props.setPlayer(e)
    }
    handleReset(){
        this.props.reset()
    }
    renderWinner(){
        if(this.props.winner){
            return (<><h2>Winner is {this.props.winner}</h2><button onClick={() => this.handleReset()}>Reset</button></>)
        }else{
            return (this.props.player ?
            < h3 > Turn of Player { this.props.player } </h3>
            : <Player player={(e)=>this.handleSetPlayer(e)}/>)
        }  

    }
    render() {
        return (<span>{this.renderWinner()}</span>)
        
        

    }
}
export default Status;

