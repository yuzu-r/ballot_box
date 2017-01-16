var NewPollContainer = React.createClass({
  getDefaultProps: function(){
    return (
      {title: '',
       candidates: [
                      {name: '', description: 'hi'},
                      {name: '', description: 'bye'}
                    ],
       blankCandidate: {name: '', description: ''}
      }
    )
  },
  getInitialState: function(){
    return( 
      {title: this.props.title,
      candidates: this.props.candidates}
    )
  },
  handleDeleteCandidate: function(index){
    var newArray = this.state.candidates;
    newArray.splice(index,1);
    this.setState(
        {candidates: newArray}
      );
  },
  handleNameChange: function(index,e) {
    var name = e.target.value;
    var newArray = this.state.candidates;
    newArray[index].name = name;
    this.setState(
        {candidates: newArray}
      );
  },
  handleNewCandidate: function(){
    var newCandidates = this.state.candidates;
    // push a copy, not the original
    var newBlank = Object.assign({}, this.props.blankCandidate);
    newCandidates.push(newBlank);
    this.setState(
      {candidates: newCandidates}
    )
  },
  handleTitleChange: function(e){
    var title = e.target.value;
    this.setState( 
      {title: title}
    );
  },
  isValidCandidate: function(index){
    var candidate = this.state.candidates[index];
    return (
      candidate.name.length > 0
    )
  },
  validCandidates: function(){
    // poll requires at least two candidates to be valid
    var candidates = this.state.candidates;
    var validCounter=0;
    for (var i = 0; i < candidates.length; i++) {
      if (candidates[i].name.length > 0) {
        validCounter++;
      }
    }
    return (
      candidates.length > 1 && validCounter > 1
    )
  },
  validTitle: function(){
    var title = this.state.title;
    return (
      title.length > 0
    )    
  },
  render: function(){
    var candidatesArray=[];
    for (var i=0; i < this.state.candidates.length; i++) {
      candidatesArray.push(<PollCandidate 
                             key={i.toString()}
                             handleNameChange={this.handleNameChange.bind(null,i)}
                             handleDeleteCandidate={this.handleDeleteCandidate.bind(null,i)}
                             name={this.state.candidates[i].name}
                             isValidCandidate={this.isValidCandidate.bind(null,i)} />);
    }
    var isValid = this.validTitle() && this.validCandidates();
    return (
      <div className='title'>
        <PollTitle title={this.state.title} 
                    validTitle={this.validTitle} 
                    handleTitleChange={this.handleTitleChange} />
        {candidatesArray}
        <PollButtons isValid={isValid}
                    handleNewCandidate={this.handleNewCandidate}/>
      </div>
    )
  }
});
