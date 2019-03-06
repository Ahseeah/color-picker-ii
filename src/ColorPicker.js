import React, { useState } from 'react'

export default function ColorPicker(props) {
  const [changeHue, setChangeHue] = useState(Math.floor(Math.random() * 240))
  const [changeSaturation, setChangeSaturation] = useState(
    Math.floor(Math.random() * 100)
  )
  const [changeLightness, setChangeLightness] = useState(
    Math.floor(Math.random() * 100)
  )
  const [color, setColor] = useState([])

  const randomColor = () => {
    setChangeHue(Math.floor(Math.random() * 240))
    setChangeSaturation(Math.floor(Math.random() * 100))
    setChangeLightness(Math.floor(Math.random() * 100))
  }

  const addColorToDOM = () => {
    setColor(oldColor =>
      oldColor.concat(
        `hsl(${changeHue}, ${changeSaturation}%, ${changeLightness}%)`
      )
    )
  }

  return (
    <>
      <header>{props.title}</header>
      <main
        style={{
          backgroundColor: `hsl(${changeHue}, ${changeSaturation}%, ${changeLightness}%)`,
          border: '1px dotted grey'
        }}
      >
        <section>
          <p>{`hsl(${changeHue}, ${changeSaturation}%, ${changeLightness}%)`}</p>
          <div className="slider">
            <label>Hue</label>
            <input
              type="range"
              onChange={event => setChangeHue(event.target.value)}
              name="Hue"
              min="0"
              max="240"
            />
          </div>
          <div className="slider">
            <label>Saturation</label>
            <input
              type="range"
              onChange={event => setChangeSaturation(event.target.value)}
              name="Saturation"
              min="0"
              max="100"
            />
          </div>
          <div className="slider">
            <label>Lightness</label>
            <input
              type="range"
              onChange={event => setChangeLightness(event.target.value)}
              name="Lightness"
              min="0"
              max="100"
            />
          </div>
          <button onClick={randomColor}>Random Color</button>
          <button onClick={addColorToDOM}>Save Color</button>
        </section>
      </main>
      <section>
        <ul>
          {color.map(colors => {
            return (
              <section key={colors}>
                <figure
                  className="Slider"
                  style={{
                    changeColor: `${colors}`
                  }}
                />
                <li>{colors}</li>
              </section>
            )
          })}
        </ul>
      </section>
    </>
  )
}
