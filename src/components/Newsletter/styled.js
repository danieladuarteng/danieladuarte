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
    border: none;
  }
`
export const NewsletterLabel = styled.label`
  width: 100%;
  max-width: 500px;
  text-align: center;
`
export const Loader = styled.div`
  border: 8px solid #e86ed0;
  border-radius: 50%;
  border-top: 8px solid #029DDB;
  width: 50px;
  height: 50px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  position: absolute;
  top: 50%;
      left: 50%;
      margin: -22px auto auto -22px;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  /* Safari */
  @-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
`

export const ButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
`
