import React from 'react'
import SoundData from './SoundData'
import {Table} from 'react-bootstrap'

export default ({data, update, onSort}) =>{
    if (!data) { return (<p>Loading...</p>); }
    const sounds = data.map((sound, index) =>{
        return(
            <SoundData sound={sound} index={index} key={`sound-${index}`} update={update} />
        )
    });
    return(
        <Table striped bordered hover>
            <thead>
            <tr>
                <th onClick={onSort.bind(null, 'singer')}>Singer</th>
                <th>Song</th>
                <th onClick={onSort.bind(null, 'genre')}>Genre</th>
                <th onClick={onSort.bind(null, 'year')}>Year</th>
            </tr>
            </thead>
            <tbody>
            {sounds}
            </tbody>
        </Table>
    )
}
