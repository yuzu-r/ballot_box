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
        customCandidate: ''
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
    this.setState(
      {
        customCandidate: e.target.value
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
    console.log('voting for', candidate.id);
    console.log('pollid', this.state.poll.id);
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
      customCandidate = <div className='candidate'>
                        <input placeholder='enter custom name' 
                          value={this.state.customCandidate}
                          onChange={this.handleCustomCandidateEntry}
                          className='form-control'>
                        </input>
                        <button 
                          className='btn btn-primary'
                          onClick={this.handlePostNewCandidate.bind(null,this.state.customCandidate)}>
                          Vote Custom Choice
                        </button>
                        </div>;
    };
    var chartResults = null;
    if (this.state.voted){
      chartResults = <PollChart poll_id={this.state.poll.id} />
    }
    return (
      <div className='col-xs-10 col-xs-offset-1 poll'>
        <h3>{this.state.poll.title}</h3>
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