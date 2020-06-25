import styled from 'styled-components'


export const NewsletterWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 40px 20px;
  background-color: #029DDB;
  color: #fff;
  input[type="email"]
	{
    text-align: left;
    font-size: 1.2rem;
    margin: 0 0 20px 0;
    padding: 20px 10px;
    width: 100%;
    max-width: 500px;
  }
`
export const NewsletterLabel = styled.label`
  width: 100%;
  max-width: 500px;
  text-align: center;
`