var PollDetail = React.createClass({
  render(){
    return (
      <div className='poll-detail'>
        <p>{this.props.poll.title}</p>
        <p>Total Votes: {this.props.poll.total_votes}, last voted on: </p>
        <button onClick={this.props.deletePoll.bind(null,this.props.poll)}>Delete Me</button>
      </div>
    )
  }
});