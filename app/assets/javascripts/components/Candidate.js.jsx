var Candidate = React.createClass({
  render(){
    // this.props.voted, this.props.handleVote.bind(null, this.props.choice)
    // this.props.choice.vote_count, this.props.choice.name
    var elCandidate=null;
    if (this.props.voted) {
      var voteText = this.props.choice.name + ' (' + this.props.choice.vote_count + ' votes)';
      elCandidate = <span className='h4'>
                      {voteText}
                    </span>;
    }
    else {
      elCandidate = <button  
                      onClick={this.props.handleVote.bind(null,this.props.choice)}
                      className='btn btn-default btn-small'>
                      {this.props.choice.name}
                    </button>;
    }
    //console.log('in candidate, voted is', this.props.voted)
    return (
      <div className='display-candidate'>
        {elCandidate}
      </div>
    )
  }
});