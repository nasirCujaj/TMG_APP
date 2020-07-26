import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Location from '@material-ui/icons/LocationCity';
import List from '@material-ui/core/List';
import MailIcon from '@material-ui/icons/Phone';
import Mail from '@material-ui/icons/Mail'
import './footer.css'


export class Footer extends Component {
    render() {
        return (
            <div className="container">
                <div className="list">
                <List className="list-group">
                  <ListItem>
                      <ListItemIcon> <Location/> </ListItemIcon>
                      <ListItemText>2 Langley Lane, Sw8 1GB</ListItemText>
                  </ListItem>
                  <ListItem>
                      <ListItemIcon> <MailIcon/> </ListItemIcon>
                      <ListItemText>Phone</ListItemText>
                  </ListItem>
                  <ListItem>
                      <ListItemIcon> <Mail /> </ListItemIcon>
                      <ListItemText>Mail</ListItemText>
                  </ListItem>
                </List>
                </div>
                <div className="social">
                    <SocialIcon url="http://twitter.com/tmg" />
            
                    <SocialIcon url="http://facebook.com/tmg" />
                </div>
            </div>
        )
    }
}

export default Footer
