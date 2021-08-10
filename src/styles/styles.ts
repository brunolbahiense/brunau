import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const SAC = styled.button`
  border-radius: 10px;
  background-color: #000248;
  color: #eee;
  padding: 1em;
  font-size: 2rem;
  border: none;

  :hover {
    background-color: #511664;
  }
`

export const Logo = styled.img`
  width: 25rem;
  margin: 2rem;
  border-radius: 10px;
`
export const Header = styled.h1`
  font-size: 3em;
`
export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  background-color: yellow;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  color: red;
`
export const TwitchImg = styled.img`
  width: 20rem;

  :hover {
    opacity: 0.5;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
`
export const Note = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  color: red;
`
export const Link = styled.a`
  text-decoration: none;
  padding: 10px;
  margin-top: 10px;
`
