import React from 'react'
import {UserContext, ChannelContext} from '../../App'

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {
          user => {
            return (
              <ChannelContext.Consumer>
                {
                  last => {
                    return <div>User context value {user} - {last}</div>
                  }
                }
              </ChannelContext.Consumer>
            )
          }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF
