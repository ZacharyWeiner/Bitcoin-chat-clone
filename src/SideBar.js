import React from 'react'
import { Link } from 'react-router-dom'
import StartChat from './StartChat'

function SideBar({ chats, computer }) {

  return <div className="sidebar">
    <StartChat computer={computer}></StartChat><br />
    {chats.map(object =>
      <small key={object._id}><Link to={`/chat/${object._id}`}>{object._id.substr(0, 16)}</Link><br /></small>
    )}
    <div className="branding">
      <small>This chat runs on the</small><br />
      <small><a rel='noopener noreferrer' target="_blank" href='http:/bitcoincomputer.io'>Bitcoin Computer</a></small><br />
      <small><a rel='noopener noreferrer' target="_blank" href='https://faucet.bitcoincloud.net'>Bitcon Faucet</a></small><br />
      <small><a rel='noopener noreferrer' target="_blank" href='https://github.com/bitcoin-computer/bitcoin-chat'>Improve chat on Github</a></small>
    </div>
  </div>
}

export default SideBar
