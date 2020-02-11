import  React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import SoundList from './Components/SoundList';
import ActiveSound from './Components/ActiveSound';
import FilterComponent from './Components/FilterComponent';

const url = 'http://localhost:4000/sounds';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
            active: 0,
        };
    }
componentDidMount() {
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json()
        }).then(data => {
            console.log(data);
            this.setState({
                data: data,
            })
        }).catch(error => {
            console.log(error)
        })
}
    updateData(config) {
        this.setState(config);
    }

    render() {
        return(
            <div>
              <div className='d-flex'>
                  <SoundList data={this.state.data} update={this.updateData.bind(this)} />
                  <FilterComponent data={this.state.data} />
              </div>
              <ActiveSound data={this.state.data} active={this.state.active} />
            </div>
        )
    }
}
