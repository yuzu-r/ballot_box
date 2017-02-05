var CustomCandidate = React.createClass({
  render: function(){
    return (
      <div className='candidate input-group'>
        <input placeholder='enter custom option' 
                value={this.props.value}
                onChange={this.props.onCustomCandidateEntry}
                className='form-control custom-candidate-input'>
        </input>
        <div className='input-group-btn'>
          <button 
              className='btn btn-primary'
              onClick={this.props.onPostNewCandidate.bind(null,this.props.value)}
              disabled={!this.props.validPoll}
              >
              Vote Custom Option
          </button>
        </div>
      </div>
    )
  }
});
