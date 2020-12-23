import '../style/App.css';
import React from 'react';
import { Container, FormControl } from '@material-ui/core';
import InfoBarContainer from './InfoBarContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <InfoBarContainer dataTitle="Salary" />
        <InfoBarContainer dataTitle="Location" />
        <InfoBarContainer dataTitle="Job Title" />
        <InfoBarContainer dataTitle="Years of Experience" />
        <form>
          <label>Salary: </label>
          <input /><br /><br />
          <label>Location: </label>
          <input /><br /><br />
          <label>Job Title: </label>
          <input /><br /><br />
          <label>Years of Experience: </label>
          <input /><br /><br />

          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default App;