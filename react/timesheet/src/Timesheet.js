import React, { Component } from 'react'

import TimesheetForm from './TimesheetForm'
import Chart from './Chart'
import TimesheetEntries from './TimesheetEntries'
import TimesheetHours from './TimesheetHours'


export default class TimesheetApp extends Component {

	constructor(props) {
		super(props)
		this.state = {
			entries: []
		}
	}

	/*
		-ES6 way of writing a function
		-This function is passed as a prop to the AddEntryForm component to get form componentschanges in state
	*/

	// Adds a new entry to the state
	onEntryAddition = (newEntry) => {
		let entries = JSON.parse(JSON.stringify(this.state.entries))
		newEntry = JSON.parse(JSON.stringify(newEntry))
		
		this.setState({
			entries: entries.concat(newEntry)
		})
	}

 	onEntryDeletion = (index) => {
		 console.log('here')
		let entries = JSON.parse(JSON.stringify(this.state.entries))
		this.setState({
			entries: entries.splice(index,1)
		})
	}

	calculateHours = () => {
		let totalHours = 0
		for (let i=0 ; i<this.state.entries.length ; i++) {
			totalHours += parseInt(this.state.entries[i].hours, 10)
		}
		return totalHours
	}

	generateChartData = (entryKey) => {
		let chartData = []
		this.state.entries.map(entry =>
			chartData.push({name: entry[entryKey], y: parseInt(entry.hours,10)})
		)
		return chartData
	}

	render() {
  	const { entries } = this.state
  	return (
    	<Timesheet 
    		entryAdditionHandler={this.onEntryAddition}
				entryDeletionHandler={this.onEntryDeletion}
    		projectChartData={this.generateChartData("projectCode")}
				activityChartData={this.generateChartData("activity")}
				entries={entries}
				totalHours={this.calculateHours()}
			/>
    )
  }
}


class Timesheet extends Component {

  //to validate the datatypes of props
  static propTypes = {
    entryAdditionHandler: React.PropTypes.func,
		entryDeletionHandler: React.PropTypes.func,
    entries: React.PropTypes.array,
    projectChartData: React.PropTypes.array,
    activityChartData: React.PropTypes.array,
		totalHours: React.PropTypes.number
  }

  render() {

		const {	
      entryAdditionHandler,
			entryDeletionHandler,
		  entries,
		  projectChartData,
		  activityChartData,
			totalHours,
		} = this.props
    return (
      <div className="row">
	      <div className="col-md-12">
					<TimesheetForm entryAdditionHandler={entryAdditionHandler}/>
	      </div>
				<div className="col-md-8 col-md-offset-2">
	      	<TimesheetEntries entries={entries} entryDeletionHandler={entryDeletionHandler}/>
	      </div>
				<div className="col-md-4 col-md-offset-4">
	      	<TimesheetHours totalHours={totalHours} />
	      </div>
        <div className="col-md-10 col-md-offset-2">
          <Chart chartData={activityChartData} title="By Activity" />
          <Chart chartData={projectChartData} title="By Project" />
        </div>
	    </div>
    );
  }
}
