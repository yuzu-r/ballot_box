var Test = React.createClass({
  render(){
    return (
      React.DOM.div({id: 'chart'})
    );
  },
  componentDidMount: function(){
    this.drawCharts();
  },
  componentDidUpdate: function(){
    this.drawCharts();
  },
  drawCharts: function(){
    //var data = this.props.data;
    var data = {"Blueberry": 44, "Strawberry": 23}
    console.log(data);
    new Chartkick.PieChart('chart', data, {legend: 'bottom'});
  }  
});