var PollDetail = React.createClass({
  render(){
    return (
      <div>
        <p>{this.props.poll.title}</p>
        <button onClick={this.props.deletePoll.bind(null,this.props.poll)}>Delete Me</button>
      </div>
    )
  }
});