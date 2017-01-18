var Test = React.createClass({
  render(){
    return (
      React.DOM.div({id: 'chart-2', style: {height: "200px"}})
    );
  },
  componentDidMount: function(){
    this.drawCharts();
  },
  componentDidUpdate: function(){
    this.drawCharts();
  },
  drawCharts: function(){
    var data = this.props.data;
    new Chartkick.PieChart("chart-2", data);
  }  
});