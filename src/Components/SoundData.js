import React from 'react'

export default ({sound, update, index}) => {
    return (
            <tr onClick={() => update({ active: index })}>
              <td>{sound.singer}</td>
              <td>{sound.song}</td>
              <td>{sound.genre}</td>
              <td>{sound.year}</td>
            </tr>
    )
}
