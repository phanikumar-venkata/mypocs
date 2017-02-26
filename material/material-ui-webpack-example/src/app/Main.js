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
import EqTable from '../components/EqTable';

import Paper from 'material-ui/Paper';

const styles = {
  container: {
    textAlign: 'center',
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
      display: 'inline-block',
    };

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <EqAppBar title="Equinix Customer Portal" />

          <EqPaper zDepth={1} label="Recent Orders">

            <EqTable />
          </EqPaper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
