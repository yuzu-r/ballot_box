var Poll = React.createClass({
  componentDidMount() {
    console.log('mounted', this.props.candidates)       
  },
  handleVote(candidate, e) {
    console.log('voting for', candidate.id);
    $.ajax(
      { url: '/polls/' + this.props.poll.id, 
        type: 'PATCH', 
        data: { 
            poll: {  
                    candidates_attributes: {id: candidate.id}
                  } 
          }, 
        success: (response) => { console.log('it worked!', response); }
      });     
  },
  render(){
    var candidates = this.props.candidates.map((c) => {
      return (
        <Candidate key={c.id} choice={c} handleVote={this.handleVote} />
      )
    });
    return (
      <div className='col-xs-10 col-xs-offset-1'>
        <h3>{this.props.poll.title}</h3>
        {candidates}
      </div>
    )
  }
});