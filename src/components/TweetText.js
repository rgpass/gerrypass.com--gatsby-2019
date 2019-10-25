import React from 'react'
import { string } from 'prop-types'

const baseURL = 'https://twitter.com/compose/tweet?text=@rgp4ss'

export const TweetText = ({ message, text }) => {
  const encodedMessage = message ? encodeURI(` ${message}`) : ''
  const href = `${baseURL}${encodedMessage}`

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  )
}

TweetText.propTypes = {
  message: string,
  text: string.isRequired,
}
