/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrangeA700} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import EqPaper from '../components/EqPaper';
import EqAppBar from '../components/EqAppBar';

import Paper from 'material-ui/Paper';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrangeA700,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    const style = {
      height: 100,
      width: 100,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <Dialog
            open={this.state.open}
            title="Super Secret Password"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            1-2-3-4-5
          </Dialog>
          <h1>Material-UI</h1>
          <h2>example project</h2>
          <RaisedButton
            label="Super Secret Password"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />

          <br/> <br />

          <div>
            <EqPaper zDepth={1} label="Paper 1">
              <h2>example chile components</h2>
              <RaisedButton
                label="Super Secret Password"
                secondary={true}
                onTouchTap={this.handleTouchTap}
              />
            </EqPaper>
            <EqPaper zDepth={2} label="Paper 2" />
            <EqPaper zDepth={3} label="Paper 3" />
            <EqPaper zDepth={4} label="Paper 4" />
            <EqPaper zDepth={5} label="Paper 5" />
          </div>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
