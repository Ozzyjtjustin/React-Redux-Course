import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/player'
import AddPlayerForm from '../components/AddPlayerForm';
import Header from '../components/Header';
import Player from '../components/Player';



class Scoreboard extends Component{
  static propTypes = {
    players: PropTypes.array.isRequired
  };

    render() {

      const { dispatch, players } = this.props
      const addPLayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
      const removePLayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch) ;
      const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

      const playerComponents = player.map((player, index )=> (
        <Player 
          index={index}
          name= {player.name}
          score= {player.score}
          key={player.name}
          updatePlayerScore={updatePlayerScore}
          removePLayer={removePLayer}
        />
      ))

      return (
        <div className="scoreboard">
          <Header players={players} />
          <div className="players">
            { playerComponents }
          </div>
          <AddPlayerForm addPLayer={addPLayer} />
        </div>
      );
    }

};


const mapStateToProps = state => (
  {
    players: state
  }
);

export default connect(mapStateToProps)(Scoreboard)