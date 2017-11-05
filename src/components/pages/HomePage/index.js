// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { PageTemplate } from 'components'
import { Oracle } from 'containers'

const HomePage = () => {
  return (
    <PageTemplate
      header={null}
      footer={null}
      contentCentered
    >
      <Oracle />
    </PageTemplate>
  )
}

export default HomePage
