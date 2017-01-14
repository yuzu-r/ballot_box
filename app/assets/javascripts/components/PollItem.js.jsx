var PollItem = React.createClass({
  render(){
    console.log(this.props.item)
    return (
      <div className='col-xs-10 col-xs-offset-1 poll-index-item'>
        <h5>{this.props.item.title}</h5>
        <p>Created At: {this.props.item.created_at}, Total Votes: {this.props.item.total_votes}</p>
      </div>
    )
  }
});