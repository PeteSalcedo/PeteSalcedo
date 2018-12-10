import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render() {
        return(
          <div className="contact-body">
            <Grid className="contact-grid">
              <Cell col={6}>
                <h2>Pete Salcedo</h2>
                <img
                  src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-128.png"
                  alt="avatar"
                  style={{height: '250px'}}
                   />
                 <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>A web devekoper that likes to learn to depth the basics of react and why things exsist challenging all knowledge</p>
              </Cell>
              <Cell col={6}>
                <h2>Contact Me</h2>
                <hr/>
                <div className="contact-list">
                  <List>
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-phone-square" aria-hidden="true"/>
                        (123) 456-7890
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-fax" aria-hidden="true"/>
                        (123) 456-7890
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-envelope" aria-hidden="true"/>
                        someone@example.com
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-skype" aria-hidden="true"/>
                        MySkypeID
                      </ListItemContent>
                    </ListItem>
                  </List>
                </div>
              </Cell>
            </Grid>
          </div>
        )
      }
    }
    export default Contact;