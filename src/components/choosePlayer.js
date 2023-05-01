import { Component } from 'react';

class Player extends Component {
    handleform(e){
        e.preventDefault();
        this.props.player(e.target.player.value);
    }
    render() {

        return(
        <form onSubmit={(e)=>this.handleform(e)}>
            <label>Player X
                <input type="radio" name="player"value="X" />
            </label>
            <label>Player O
                <input type="radio" value="O" name="player"/>
            </label>
            <input type="submit" value="Start"/>
            
        </form>
        ) 

    }
}
export default Player;