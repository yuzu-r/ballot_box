var Poll = React.createClass({
  getDefaultProps: function(){
    return (
      {
        voted: false,
        blankCandidate: {name: ''}
      }
    )
  },
  getInitialState: function(){
    return (
      {
        voted: false,
        candidates: this.props.poll.poll.candidates,
        poll: this.props.poll.poll,
        editMode: false,
        customCandidate: '',
        validPoll: false,
      }
    )
  },
  handleAddCandidate: function() {
    this.setState(
      { editMode: true}
    )
  },
  handleCustomCandidateEntry: function(e){
    // evaluate whether the custom entry is a duplicate of anything else
    var customCandidate = e.target.value;
    var candidateList = this.state.candidates.map(c => c.name);
    var duplicateFound = candidateList.indexOf(customCandidate) > -1;
    var emptyString = customCandidate.length === 0;
    this.setState(
      {
        customCandidate: customCandidate,
        validPoll: !duplicateFound && !emptyString
      }
    )
  },
  handlePostNewCandidate: function(name,e) {
    var self = this;
    $.ajax(
      {
        url: '/polls/' + this.state.poll.id + '/add',
        type: 'PATCH',
        data: {
                poll: { candidates_attributes: {name: name} }
              },
        success: function(response) {
          self.setState(
            {
              candidates: response.candidates,
              voted: response.voted,
              editMode: false
            }
          )
        }
      });
  },
  handleVote: function(candidate, e) {
    var self = this;
    $.ajax(
      { url: '/polls/' + this.state.poll.id + '/vote', 
        type: 'PATCH', 
        data: { 
          poll: { candidates_attributes: {id: candidate.id} } 
          }, 
        success: function(response) { 
          self.setState(
            {
              candidates: response.candidates,
              voted: response.voted
            }
          );
        }
      });
  },
  render: function(){
    var candidates = this.state.candidates.map((c) => {
      return (
        <Candidate key={c.id} choice={c} handleVote={this.handleVote} voted={this.state.voted} />
      )
    });
    var addCandidate = null;
    if (this.props.user && !this.state.voted) {
      //console.log('I should add a button to add choices')
      addCandidate = <button disabled={this.state.editMode} 
                             onClick={this.handleAddCandidate}
                             className='btn btn-info'>Add Another Option</button>
    }
    var customCandidate = null;
    if (this.state.editMode) {
      customCandidate = <CustomCandidate 
                            value={this.state.customCandidate}
                            onCustomCandidateEntry={this.handleCustomCandidateEntry}
                            onPostNewCandidate={this.handlePostNewCandidate}
                            validPoll={this.state.validPoll} />
    };
    var chartResults = null;
    var pollMessage = 'Click on one of the choices below to vote and see results.'
    if (this.state.voted){
      chartResults = <PollChart poll_id={this.state.poll.id} />
      pollMessage = 'Thanks for voting!'
    }   
    return (
      <div className='col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 poll'>
        <h3>{this.state.poll.title}</h3>
        <p>{pollMessage}</p>
        <div>
          {candidates}
          <div className='add-candidate'>
            <br />
            {addCandidate}
          </div>
          {customCandidate}
        </div>
        {chartResults}
      </div>
    )
  }
});