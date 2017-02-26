/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

export default class EqPaper extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {

    const style = {
      margin: 50,
      textAlign: 'center',
      display: 'inline-block',
    };

    return (
      <div>
        <Paper style={style} zDepth={this.props.zDepth} >
          <h2>{this.props.label}</h2>
          {this.props.children}
        </Paper>
      </div>
    );
  }
}
