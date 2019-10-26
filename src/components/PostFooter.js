import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 48px;
  padding-top: 48px;
`

const Strong = styled.span`
  font-weight: bold;
`

export const PostFooter = () => {
  return (
    <Wrapper>
      <Strong>Gerry Pass</Strong> is a software engineer, mentor, and teacher.
      He's taught hundreds of people how to write clean, future-proof code by
      focusing on best practices, readability, and testing. He lives with his
      wife and son in Atlanta, Georgia, USA.
    </Wrapper>
  )
}
