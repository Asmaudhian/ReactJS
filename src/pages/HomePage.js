import React, { Component } from 'react';
import '../styles/App.css';
import { ProgressBar, Input, Row } from 'react-materialize'
import List from '../components/list';
import moment from 'moment'

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
      start: '',
      end: '',
    }
  }

  componentDidMount() {
    this.research();
  }

  research(event) {
    let start = this.state.start;
    let end = this.state.end;
    if (event && event.target.id === 'from') {
      start = event.target.value;
      this.setState({
        start: event.target.value,
      });
    }
    else if (event && event.target.id === 'to') {
      end = event.target.value;
      this.setState({
        end: event.target.value,
      });
    }

    if ((event && moment(start).isBefore(end) === true) || (this.state.start === '' || this.state.end === '')) {
      let url = this.buildArray(start, end);
      fetch(url)
        .then(res => { return res.json() })
        .then(jsonData => { this.setState({ data: jsonData }) }).catch((err) => {
          alert(err);
        });
    }
    else if (event) {
      alert('La date de fin doit être supérieure à la date de début')
    }
  }

  buildArray(start, end) {
    let url = 'http://localhost:1337/';
    if (start.length !== 0 || end.length !== 0) {
      url = url + '?';
    }
    if (start.length !== 0) {
      url = url + 'from=' + moment(start).format('DD-MM-YYYY');
    }
    if (start.length !== 0 && end.length !== 0) {
      url = url + '&';
    }
    if (end.length !== 0) {
      url = url + 'to=' + moment(end).format('DD-MM-YYYY');
    }
    return url;
  }

  render() {
    return (
      <div>
        <h3>Prochaines Fermetures</h3>
        <h6>Recherche par date</h6>
        <Row>
          <Input type='date' id='from' onChange={this.research.bind(this)} value={this.state.start} s={6} label="Date de début" />
          <Input type='date' id='to' onChange={this.research.bind(this)} value={this.state.end} s={6} label="Date de fin" />
        </Row>
        {!this.state.data ?
          <ProgressBar /> :
          this.state.data.length === 0 ?
            <h5>Aucun résultat</h5> :
            <List data={this.state.data} />
        }
      </div>
    );
  }
}

export default HomePage;
