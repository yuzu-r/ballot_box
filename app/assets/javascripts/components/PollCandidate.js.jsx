var PollCandidate = React.createClass({
  render: function(){
    var isValid = this.props.isValidCandidate();
    var warningText = isValid ? '' : 'Name is required.'
    return (
      <div className='candidate'>
        <input placeholder='enter name' 
               value={this.props.name}
               onChange={this.props.handleNameChange}></input><span>{warningText}</span>
        <button onClick={this.props.handleDeleteCandidate}>Delete this Choice</button>
      </div>
    )
  }
});
