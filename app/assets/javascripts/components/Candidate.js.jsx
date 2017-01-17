var Candidate = React.createClass({
  render(){
    return (
      <div className='col-xs-10 col-xs-offset-1'>
        <h4>{this.props.choice.name}<small>({this.props.choice.vote_count} votes)</small></h4>
        <button onClick={this.props.handleVote.bind(null,this.props.choice)}>Vote Me</button>
      </div>
    )
  }
});