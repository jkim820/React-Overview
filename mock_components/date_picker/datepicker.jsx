import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class DatePickers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: new Date()
        };
        
        this.startDate = this.startDate.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
            <DatePicker 
                selected={this.state.startDate} 
                onChange={this.handleChange} 
            /> // Select Date Only
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                timeCaption="Time"
            /> // Select Time Only
        );
    }
}

export default DatePickers;