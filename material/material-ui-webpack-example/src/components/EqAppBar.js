/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

export default class EqAppBar extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {


    return (
      <AppBar
		    title={this.props.title}
		    iconClassNameRight="muidocs-icon-navigation-expand-more"
		  />
    );
  }
}
