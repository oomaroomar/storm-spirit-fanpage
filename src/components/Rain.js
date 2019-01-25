import React from 'react'
import Particles from 'react-particles-js'



class Rain extends React.Component {

  particleOpt = (url, size) => {
    return (
      {
        particles: {
          number: {
            value: 4,
            density: {
              enable: true,
              value_area: 2000
            }
          },
          size: {
            value: size
          },
          line_linked: {
            enable: false
          },
          shape: {
            type: 'image',
            image: {
              src: require(`../images/pngs/${url}`)
            }
          },
          move: {
            enable: true,
            speed: 10,
            direction: 'none',
            out_mode: 'out',
            random: false,
            attract: {
              enable: false
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: false,
              mode: 'repulse'
            }
          }
        }
      }
    )
  }

  render() {
    return(
      <div>
        <Particles params={this.particleOpt('owo.png', 60)}/>
        <Particles params={this.particleOpt('whatsthis.png', 70)}/>
      </div>
    )
  }
}

export default Rain