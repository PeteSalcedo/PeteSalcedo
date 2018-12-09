import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

class Project extends Component {
	constructor(props) { 
		super(props);
		this.state = { active: 0 };
	}

	toggleCategories() {
		if (this.state.activeTab === 0) {
			return (
				<div>
					<h1>This is react</h1>
				</div>
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
