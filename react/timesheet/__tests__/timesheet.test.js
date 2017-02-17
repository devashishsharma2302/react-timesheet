import React from 'react';
import { shallow} from 'enzyme';
import Timesheet from '../src/Timesheet';
import TimesheetForm from '../src/TimesheetForm';
import TimesheetEntries from '../src/TimesheetEntries'; 
import Totaltime from '../src/Totaltime'

describe('Tests for Timesheet App component', () => {
  const component = shallow(<Timesheet/>);
  let entryAddition =  component.instance().onEntryAddition
  const wrapper = shallow(<TimesheetForm entryAdditionHandler={entryAddition}/>);

  it('Timesheet App state intialised.', () => {
      expect(component.state('entries').length).toEqual(0)
    });

  it('Timesheet Form on Change handler', () => {
      wrapper.instance().handleOnChange('projectCode', 'Honeywell');
      wrapper.instance().handleOnChange('hours', 10);
      wrapper.instance().handleOnChange('activity', 'dev');
      expect(wrapper.state('currentEntry')).toEqual({projectCode: 'Honeywell', hours: 10, activity: 'dev'})
    });  

  it('Test Entry added', () => {
      wrapper.instance().triggerEntryAddition({preventDefault:()=>null});
      expect(component.state('entries').length).toEqual(1)
    });

  it('Total time updated' , () => {
    let entries = component.state('entries');
    const total = entries.reduce((prev , obj) => parseInt(obj.hours , 10) + prev , 0)
    const totaltime = shallow(<Totaltime entries={entries}/>);
    expect(totaltime.find("span.total-time-value").text()).toEqual(total.toString());
  });

})