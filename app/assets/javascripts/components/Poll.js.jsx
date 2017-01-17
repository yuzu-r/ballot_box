var Poll = React.createClass({
  getDefaultProps(){
    return (
      {voted: false}
    )
  },
  getInitialState(){
    return (
      {
        voted: false,
        candidates: this.props.candidates,
        poll: this.props.poll
      }
    )
  },
  componentDidMount() {
    console.log('my candidates: ', this.props.candidates, this.props.voted);
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
    return (
      <div className='col-xs-10 col-xs-offset-1'>
        <h3>{this.state.poll.title}</h3>
        {candidates}
      </div>
    )
  }
});