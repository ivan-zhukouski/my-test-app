import React from 'react'
import {Card} from 'react-bootstrap'

export default ({data, active}) => {
    if(!data || !data[active]) {
        return <h3>Nothing found :(</h3>;
    }
    const sound = data[active];
    return (
        <div>
            <Card style={{ width: '200px' }} className='mx-auto'>
                <Card.Body>
                    <Card.Title>{sound.singer}</Card.Title>
                    <Card.Text>
                        Genre: {sound.genre}<br/>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
