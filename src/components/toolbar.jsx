import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


export default class AppToolbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.state.name
    }
  }
  render() {
    return (<div>
        <AppBar position="static">
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit">
                Pen Test Tracker, {this.state.name}
              </Typography>
            </Toolbar>
        </AppBar>
    </div>);
  }
}
