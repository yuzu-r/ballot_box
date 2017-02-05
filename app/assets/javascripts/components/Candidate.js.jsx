var Candidate = React.createClass({
  render: function(){
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
                      className='btn btn-default btn-small btn-candidate'>
                      {this.props.choice.name}
                    </button>;
    }
    return (
      <div className='display-candidate'>
        {elCandidate}
      </div>
    )
  }
});