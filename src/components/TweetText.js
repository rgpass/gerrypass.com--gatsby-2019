import React from 'react'
import { string } from 'prop-types'

const baseURL = 'https://twitter.com/compose/tweet?text=@rgp4ss%20'

export const TweetText = ({ message, text }) => {
  const encodedMessage = encodeURI(message)
  const href = `${baseURL}${encodedMessage}`

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  )
}

TweetText.propTypes = {
  message: string.isRequired,
  text: string.isRequired,
}
