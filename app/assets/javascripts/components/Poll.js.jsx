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
        candidates: this.props.candidates,
        poll: this.props.poll,
        editMode: false,
        customCandidate: ''
      }
    )
  },
  componentDidMount() {
  },
  handleAddCandidate() {
    // add an input box for a new option
    console.log('I should add a candidate');
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
    console.log('voting a custom choice', name);
    $.ajax(
      {
        url: '/polls/' + this.props.poll.id + '/add',
        type: 'PATCH',
        data: {
                poll: {
                        candidates_attributes: {name: name}
                      }
              },
        success: (response) => {
          console.log('voted custom!', response);
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
    $.ajax(
      { url: '/polls/' + this.props.poll.id + '/vote', 
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
    console.log('rendering', this.state.voted)
    var candidates = this.state.candidates.map((c) => {
      return (
        <Candidate key={c.id} choice={c} handleVote={this.handleVote} voted={this.state.voted} />
      )
    });
    var addCandidate = null;
    if (this.props.user && !this.state.voted) {
      console.log('I should add a button to add choices')
      addCandidate = <button disabled={this.state.editMode} onClick={this.handleAddCandidate}>Add Another Choice</button>
    }
    else {
      console.log('I should not add a button');
    }
    var customCandidate = null;
    if (this.state.editMode) {
      customCandidate = <div className='candidate'>
                        <input placeholder='enter custom name' 
                          value={this.state.customCandidate}
                          onChange={this.handleCustomCandidateEntry}>
                        </input>
                        <button 
                          onClick={this.handlePostNewCandidate.bind(null,this.state.customCandidate)}>
                          Vote Custom Choice
                        </button>
                        </div>;
    };
    return (
      <div className='col-xs-10 col-xs-offset-1'>
        <h3>{this.state.poll.title}</h3>
        {candidates}
        <div className='add-candidate'>{addCandidate}</div>
        {customCandidate}
      </div>
    )
  }
});