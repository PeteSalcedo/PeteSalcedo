import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl'


class Project extends Component {
    constructor(props){
        super(props);
        this.state = {active: 0};
    }
    render() {
        return(
            <div className="category-tabs">
              <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({ activeTab: tabId })} ripple>
              <Tab>React JS</Tab>
              <Tab>Hola Code</Tab>
              <Tab>Socket IO</Tab>
              <Tab>Angular</Tab>
              </Tabs>              
            </div>
        )
    }
}

export default Project;