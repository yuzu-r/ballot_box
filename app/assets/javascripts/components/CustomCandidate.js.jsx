var CustomCandidate = React.createClass({
  render(){
    return (
      <div className='candidate'>
        <input placeholder='enter custom name' 
                value={this.props.value}
                onChange={this.props.onCustomCandidateEntry}
                className='form-control custom-candidate-input'>
        </input>
        <button 
            className='btn btn-primary btn-custom-candidate'
            onClick={this.props.onPostNewCandidate.bind(null,this.props.value)}
            disabled={!this.props.validPoll}
            >
            Vote Custom Choice
        </button>
      </div>
    )
  }
});