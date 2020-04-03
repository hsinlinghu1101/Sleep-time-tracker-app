import React from 'react';
import DataAPiService from '../../Services/data-api-service';
import NavBar from '../NavBar/NavBar';

export default class Home extends React.Component {

  static defaultProps = {
    createDataSuccess: () => { },

  };

  state = {
    error: null,
    data_wakeup: '',

  };


  handleRecordSubmit = (event) => {
    event.preventDefault();
    const { data_created, bed_time, wakeup_time, data_wakeup } = event.target
    const start = data_created.value + ' ' + bed_time.value
    const end = data_wakeup.value + ' ' + wakeup_time.value
    //calculate the total sleep hourse with only one number of digits to appear after the decimal point.
    const hours = ((new Date(end) - new Date(start)) / 1000 / 60 / 60).toFixed(1)

    //make sure user input the valid data
    if ( hours <= 0) {
      this.setState({
        error: 'Oops! You can not wake up before you went to bed'
      })
      return
    };
    if (hours > 24) {
      this.setState({
        error: 'Oops! Unfortunately, you can not enter sleep time more than 24 hours'
      })
      return
    };

    DataAPiService.postData({
      data_created: data_created.value,
      bed_time: bed_time.value,
      wakeup_time: wakeup_time.value,
      data_wakeup: data_wakeup.value
    })

      .then(data => {
        data_created.value = ''
        bed_time.value = ''
        data_wakeup.value = ''
        wakeup_time.value = ''
        this.props.createDataSuccess()
      })

      .catch(res => {
        this.setState({
          error: JSON.stringify(res.error)
        })
      })
  };

  render() {
    const { error } = this.state
    return (

      <main role="main">
        <NavBar name={this.props.name} />

        <h2>Create New Record</h2>
        {error && <p className='error'>{error}</p>}
        <form className="sleep-record" onSubmit={this.handleRecordSubmit}>
          <div className="form-section">
            <div>
              <label htmlFor="getDate">Date - Go to Bed: </label>
              <input type="date" id="data_created" name="data_created" required /><br></br>
              <label htmlFor="bed-time">Go to Bed time: </label>
              <input id="bed-time" type="time" name="bed_time" required />
            </div>
            <div>
              <label htmlFor="getDate">Date - Wake Up: </label>
              <input type="date" id="data_wakeup" name="data_wakeup" required /><br></br>
              <label htmlFor="wakeup-time">Wake up time: </label>
              <input id="wakeup-time" type="time" name="wakeup_time" required />
            </div>
            <button className='btn add' type="submit">Submit</button>
          </div>
        </form>
      </main>
    )
  };
};