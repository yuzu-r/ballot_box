var PollItem = React.createClass({
  render(){
    return (
      <div className='col-xs-10 col-xs-offset-1 poll-index-item' onClick={this.props.showPoll.bind(null,this.props.item)}>
        <h5>{this.props.item.title}</h5>
        <p>Created At: {this.props.item.created_at}, Total Votes: {this.props.item.total_votes}</p>
      </div>
    )
  }
});