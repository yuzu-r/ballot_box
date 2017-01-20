var Candidate = React.createClass({
  render(){
    var voteCountText = null;  
    voteCountText=' (' + this.props.choice.vote_count + ' votes)';
    console.log('in candidate, voted is', this.props.voted)
    return (
      <div className='col-xs-10 col-xs-offset-1'>
        <h4>{this.props.choice.name}<small>{voteCountText}</small></h4>
        <button disabled={this.props.voted} onClick={this.props.handleVote.bind(null,this.props.choice)}>Vote Me</button>
      </div>
    )
  }
});