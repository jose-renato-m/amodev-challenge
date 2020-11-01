import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  visibility: hidden;

  @media (max-width: 425px) {
    z-index: 9;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    visibility: visible;
    align-items: center;
    justify-content: center;
    background: #fafafa;
    height: 56px;

    > button {
      display: flex;
      flex-direction: column;
      align-items: center;

      border: 0;
      background: transparent;

      & + button {
        margin-left: 12px;
      }
    }
  }
`;
