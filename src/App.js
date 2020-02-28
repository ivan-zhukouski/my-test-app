import  React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import SoundList from './Components/SoundList'
import ActiveSound from './Components/ActiveSound'
import FilterComponent from './Components/FilterComponent'
import _ from 'lodash'
import './App.css'
import ReactPaginate from 'react-paginate'
import { actionSelectSinger } from './store/actions'


const url = 'http://localhost:4000/sounds';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModeSelected: false,
            data: [],
            active: 0,
            sort:'asc',
            sortField: 'id',
            currentPage: 0,
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
    onSort = sortField => {
        const cloneData = this.state.data.concat();
        const sort = this.state.sort === 'asc' ? 'desc' : 'asc';
        const data = _.orderBy(cloneData, sortField, sort);
        this.setState({ data, sort, sortField })
    };
    pageChangeHandler = ({selected}) => (
        this.setState({currentPage: selected})
    );
    render() {
        const pageSize = 2;
        const dispatch = this.props.dispatch;
        return(
            <div className='container'>
                <input className="mb-3 mt-3" value={this.props.selectedSinger} onChange={(event)=>{
                    dispatch(actionSelectSinger(event.target.value))
                }} />
              <div className='d-flex'>
                  <SoundList onSort={this.onSort} data={this.state.data} update={this.updateData.bind(this)} />
                  <FilterComponent data={this.state.data} />
              </div>
                {
                    this.state.data.length > pageSize && <ReactPaginate
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={5}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.pageChangeHandler}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        nextClassName="page-item"
                        previousLinkClassName="page-link"
                        nextLinkClassName="page-link"
                    />
                }
              <ActiveSound data={this.state.data} active={this.state.active} />
            </div>
        )
    }
}
