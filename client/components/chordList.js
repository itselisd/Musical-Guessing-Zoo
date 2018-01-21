import React from 'react'

const Chords = (props) => {
    return (
      <div>
        <p className='welcome'>
        A major chord is formed by the first, third, and fifth note of a major scale.
        <br/>
        Here is a list of the major chords to get you started before we explore!
        </p>
        <div className='chordList'>
          <table align='center'>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>First</td>
              <td>Third</td>
              <td>Fifth</td>
            </tr>
            <tr>
              <td>C major</td>
              <td>C</td>
              <td>E</td>
              <td>G</td>
            </tr>
            <tr>
              <td>C# major</td>
              <td>C#</td>
              <td>E#</td>
              <td>G#</td>
            </tr>
            <tr>
              <td>D major</td>
              <td>D</td>
              <td>F#</td>
              <td>A</td>
            </tr>
            <tr>
              <td>Eb major</td>
              <td>Eb</td>
              <td>G</td>
              <td>Bb</td>
            </tr>
            <tr>
              <td>E major</td>
              <td>E</td>
              <td>G#</td>
              <td>B</td>
            </tr>
            <tr>
              <td>F major</td>
              <td>F</td>
              <td>A</td>
              <td>C</td>
            </tr>
            <tr>
              <td>F# major</td>
              <td>F#</td>
              <td>A#</td>
              <td>C#</td>
            </tr>
            <tr>
              <td>G major</td>
              <td>G</td>
              <td>B</td>
              <td>D</td>
            </tr>
            <tr>
              <td>Ab major</td>
              <td>Ab</td>
              <td>C</td>
              <td>Eb</td>
            </tr>
            <tr>
              <td>A major</td>
              <td>A</td>
              <td>C#</td>
              <td>E</td>
            </tr>
            <tr>
              <td>Bb major</td>
              <td>Bb</td>
              <td>D</td>
              <td>F</td>
            </tr>
            <tr>
              <td>B major</td>
              <td>B</td>
              <td>D#</td>
              <td>F#</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    )
}

export default Chords;
