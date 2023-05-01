import { Component } from 'react';
import './App.css';
import Status from './components/Status';
class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
          board: Array(9).fill(null),
          player: null,
          winner:null
      }
  }
  checkWinner() {
    let lineWinner = [
        ["0", "1", "2"],
        ["3", "4", "5"],
        ["6", "7", "8"],
        ["0", "1", "2"],
        ["0", "4", "8"],
        ["2", "4", "6"],
        ["0", "3", "6"],
        ["1", "4", "7"],
        ["2", "5", "8"],
    ]
    for(let index=0; index<lineWinner.length ; index++){
      const [a,b,c]=lineWinner[index];
      if(this.state.board[a] && this.state.board[a]=== this.state.board[b] && this.state.board[a]===this.state.board[c]){
        this.setState({
          winner:this.state.player
        })
      }
      
    }

} 
setPlayer(player) {
  this.setState({
      player
  })
}
  handleClick(index) {
    if(this.state.player && !this.state.winner){

      let newBoard = this.state.board
      if (this.state.board[index] === null) {
          newBoard[index] = this.state.player
          this.setState({
              board: newBoard,
              player: this.state.player === "X" ? "O" : "X"
          })
      }
      this.checkWinner()

    }
  }
  renderBoxes(){
    return (this.state.board.map(
      (box,index)=>
      <div className='box'
      key={index}
      onClick={()=>this.handleClick(index)}>
        {box}
        </div>
        )
      )
 }
  render(){
    return (
      <div className="container">
        <h1>Tic Tac Toe</h1>  
        <Status player={this.state.player} setPlayer={(e)=>this.setPlayer(e)}/>
        <div className="board">
              {this.renderBoxes()}
           </div>
      </div>
      
      
    );
  }
}
export default App;
