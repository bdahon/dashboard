import React, {useContext} from 'react'

import {AppContext} from '../pages'

import DateNav from '../components/date-nav'
import Scrollable from '../components/scrollable'
import ReactMapGl from '../components/react-map-gl'
import Statistics from '../components/statistics'
import Informations from '../components/informations'
import Footer from '../components/footer'

import colors from '../styles/colors'

const DISABLE_FOOTER = process.env.DISABLE_FOOTER === '1'

const ScreenPage = () => {
  const {isIframe} = useContext(AppContext)
  return (
    <>
      <div className='menu'>
        <DateNav />
        <Scrollable>
          <>
            <Statistics />
            <Informations />
          </>
        </Scrollable>
        {!isIframe && !DISABLE_FOOTER && <Footer />}
      </div>

      <div className='map'>
        <ReactMapGl />
      </div>

      <style jsx>{`
      .menu {
        z-index: 1;
        display: flex;
        flex-direction: column;
        max-width: 500px;
        box-shadow: 0 1px 4px ${colors.lightGrey};
      }

      .map {
        flex: 1;
        height: 100%;
      }
    `}</style>
    </>
  )
}

export default ScreenPage
