import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../index.css';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '0',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const dataset = calculate(this.state, buttonName);
    const { total, next, operation } = dataset;
    this.setState({
      total,
      next,
      operation,
    });
  }

  render() {
    const { total } = this.state;
    return (
      <>
        <div className="app">
          <Display result={total} />
          <ButtonPanel clickHandler={this.handleClick} />

        </div>
      </>
    );
  }
}

export default App;
