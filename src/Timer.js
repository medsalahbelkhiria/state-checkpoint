import React from 'react';

class Timer extends React.Component {
  
     state = {date: new Date()};
   
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      })
    }
  
    render() {
      return (
        <div>
          <h1>Hey there!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </div>
      );
    }
  }

  export default Timer