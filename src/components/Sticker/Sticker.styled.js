import styled from 'styled-components';

export const CardWrapper = styled.div`
  border: 2px solid Gray;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    border-style: dashed;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
`;

export const Label = styled.p`
  margin-top: 8px;
  margin-bottom: 0;
  color: #2a2a2a;
`;

export const Button = styled.button.attrs({ type: 'submit' })`
  margin-top: 10px;
  padding: 4px 8px;
  cursor: pointer;
  border: 2px solid Gray;
  border-radius: 3px;
`;