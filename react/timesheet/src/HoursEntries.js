import React, { Component } from 'react'

export default class HoursEntries extends Component {
	//to validate the datatypes of props
	static propTypes = {
    entries: React.PropTypes.array,
  }
  
calcHours = (entries) => {
  var totalHours= 0
  for(var i=0;i<entries.length;i++)
    totalHours+= parseInt(entries[i].hours)
  return totalHours
}


  render(){
      const { entries } = this.props

      return (<div>
					Total Hours Spent : { this.calcHours(entries) } hours
	      </div>
          )
  }

}