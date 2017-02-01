var Poll = React.createClass({
  getDefaultProps(){
    return (
      {voted: false,
       blankCandidate: {name: ''}}
    )
  },
  getInitialState(){
    return (
      {
        voted: false,
        candidates: this.props.poll.poll.candidates,
        poll: this.props.poll.poll,
        editMode: false,
        customCandidate: '',
        validPoll: false
      }
    )
  },
  handleAddCandidate() {
    // add an input box for a new option
    this.setState(
      { editMode: true}
    )
  },
  handleCustomCandidateEntry(e){
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
  handlePostNewCandidate(name,e) {
    $.ajax(
      {
        url: '/polls/' + this.state.poll.id + '/add',
        type: 'PATCH',
        data: {
                poll: {
                        candidates_attributes: {name: name}
                      }
              },
        success: (response) => {
          this.setState(
            {
              candidates: response.candidates,
              voted: response.voted,
              editMode: false
            }
          )
        }
      })
  },
  handleVote(candidate, e) {
    //console.log('voting for', candidate.id);
    //console.log('pollid', this.state.poll.id);
    $.ajax(
      { url: '/polls/' + this.state.poll.id + '/vote', 
        type: 'PATCH', 
        data: { 
          poll: {  
                  candidates_attributes: {id: candidate.id}
                } 
          }, 
        success: (response) => { 
          console.log('I voted!', response); 
          this.setState(
            {
              candidates: response.candidates,
              voted: response.voted
            }

          )
        }
      });     
  },
  render(){
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
                             className='btn btn-info'>Add Another Choice</button>
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
      <div className='col-xs-8 col-xs-offset-2 poll'>
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