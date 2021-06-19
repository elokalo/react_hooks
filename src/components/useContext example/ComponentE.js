import React, {useContext} from 'react'
import ComponentF from './ComponentF'
import {UserContext, ChannelContext} from '../../App'

function ComponentE() {

  const user = useContext(UserContext)
  const last = useContext(ChannelContext)

  return (
    <div>
      {user} - {last}
    </div>
  )
}

export default ComponentE
