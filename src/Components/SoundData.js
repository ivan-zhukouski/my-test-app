import React from 'react'

export default ({sound, update, index}) => {
    const track = sound.song.map((item, indexx)=>{
        return(
            <tr onClick={() => update({ active: index })} key={`key-${indexx}`}>
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
