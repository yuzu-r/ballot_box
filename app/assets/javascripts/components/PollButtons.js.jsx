var PollButtons = React.createClass({
  render: function(){
    var isEnabled = this.props.isValid;
    return (
      <div className='buttonArray'>
        <button onClick={this.props.handleNewCandidate}>Add New Choice</button>
        <button disabled={!isEnabled}>Save Poll</button>
        <button>Cancel</button>
      </div>
    )
  }
})
