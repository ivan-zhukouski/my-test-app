import React from 'react'

export default ({sound, update, index}) => {
    const track = sound.song.map((item, index)=>{
        return(
            <tr onClick={() => update({ active: index })} key={`key-${index}`}>
                <td>{sound.singer}</td>
                <td>{item}</td>
                <td>{sound.genre}</td>
                <td>{sound.year}</td>
            </tr>
        )
    });
    return (

            <>
                {track}
            </>
    )
}
