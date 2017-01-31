var Candidate = React.createClass({
  render(){
    var voteCountText = null;  
    var btnVote;
    btnVote = <button disabled={this.props.voted} 
                      onClick={this.props.handleVote.bind(null,this.props.choice)}
                      className='btn btn-default btn-small'
                      >Vote Me
              </button>
    if (this.props.voted) {
      voteCountText=' (' + this.props.choice.vote_count + ' votes)';  
      btnVote = null;
    }
    //console.log('in candidate, voted is', this.props.voted)
    return (
      <div className='display-candidate'>
        <span className='h4'>{this.props.choice.name}</span>
        <span className='h4'>{voteCountText}</span>
        {btnVote}
      </div>
    )
  }
});