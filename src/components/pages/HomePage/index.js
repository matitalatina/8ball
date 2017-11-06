// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { PageTemplate, Small, Link, ParticlesBackground } from 'components'
import { Oracle } from 'containers'

const HomePage = () => {
  return (
    <PageTemplate
      header={null}
      footer={
        <Small transparent centered>
          Made with <span role="img" aria-label="Heart" aria-labelledby="">❤️</span> by <Link href="https://www.mattianatali.it" target="_blank">Mattia Natali</Link> · <Link href="https://www.mattianatali.it" target="_blank">Source Code</Link>
        </Small>
      }
      contentCentered
    >
      <ParticlesBackground />
      <Oracle />
    </PageTemplate>
  )
}

export default HomePage
