import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  text-transform: capitalize;
  background-color: #3b0251;
  color: white;
  margin-right: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover, &:active{
    background: white;
    color: #3b0251;
  }
`

export default Button;