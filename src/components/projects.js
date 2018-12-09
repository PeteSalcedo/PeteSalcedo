import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardAction, Button, CardMenu,IconButton } from 'react-mdl';

class Project extends Component {
	constructor(props) { 
		super(props);
		this.state = { active: 0 };
	}

	toggleCategories() {
		if (this.state.activeTab === 0) {
			return (
                <card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color:'#fff', height:'176px',background:"../images/reactcardimage.png"}}> React Notes App </CardTitle>
                <CardText>This app uses some good react styling to make an awsome notes </CardText>
                </card>
			);
		}else if(this.state.activeTab ===1){
            return(
            <div>
                <h1>Here Go my Hola Code prjects</h1>
            </div>
            );
        }else if(this.state.activeTab ===2){
            return(
            <div>
                <h1>Here goes what i did with socket io</h1>
            </div>
            );
        }else if(this.state.activeTab ===3){
            return(
            <div>
                <h1>Here goes what i did with angular</h1>
            </div>
            );
        }
	}

	render() {
		return (
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={tabId => this.setState({ activeTab: tabId })} ripple>
					<Tab>React JS</Tab>
					<Tab>Hola Code</Tab>
					<Tab>Socket IO</Tab>
					<Tab>Angular</Tab>
				</Tabs>
                <section className="projects-grid">
                <Grid className="projects-grid">
                <Cell col={12}></Cell>
                </Grid>
                {this.toggleCategories()}
                
                </section>
			</div>
		);
	}
}

export default Project;
