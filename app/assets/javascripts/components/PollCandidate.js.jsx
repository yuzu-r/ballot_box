var PollCandidate = React.createClass({
  render: function(){
    var isValid = this.props.isValidCandidate();
    return (
      <div className='candidate input-group'>
        <input placeholder='enter poll option, e.g. Chocolate' 
               value={this.props.name}
               onChange={this.props.handleNameChange}
               className='form-control'>
        </input>
        <div className="input-group-btn">  
          <button onClick={this.props.handleDeleteCandidate}
                  className='btn btn-default'>
            Delete this option
          </button>
        </div>
      </div>
    )
  }
});

