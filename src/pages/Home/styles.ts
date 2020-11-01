import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 272px;
  gap: 16px;
  padding: 8px 8px 72px 8px;

  width: 100%;
  min-height: 100%;
  background: #fafafa;

  /*
    Desktop first -> max-width
    Mobile first -> min-width

    @ Media queries

    Min-width -> Daqui pra cima
    Max-width -> Daqui pra baixo
  */

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  background: #878787;
  border-radius: 8px 8px 0 0;

  > img {
    border-radius: 8px 8px 0 0;
    width: 100%;
    height: 80%;
    object-fit: cover; /* -> a iamgem vai ter o tamanho original dela, e nao vai distorcer <- */
    object-position: center; /* -> Se a imagem for maior que a caixa, a imagem vai se focar em renderizar o centro dela <- */
  }

  > div {
    padding: 8px 4px;
    flex: 1;
    background: #fff;
    > header {
      display: flex;

      > div {
        > span {
          color: #7a7a7a;
          font-weight: 600;
          font-size: 14px;

          &:first-child {
            margin-right: 4px;
          }
        }
      }

      > strong {
        display: none;
        visibility: hidden;
      }

      @media (max-width: 425px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > strong {
          display: flex;
          visibility: visible;
          font-weight: 600;

          font-size: 14px;
          color: #000;
        }
      }
    }

    > div {
      display: flex;
      justify-content: space-between;

      width: 100%;

      > strong {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-weight: 400;
        font-size: 14px;

        > span {
          font-size: 18px;
          color: #d68667;
          font-weight: 600;
        }

        @media (max-width: 425px) {
          display: none;
          visibility: hidden;
        }
      }
    }
  }
`;

export const CarData = styled.div`
  font-size: 14px;

  > span {
    > svg {
      display: none;
      visibility: hidden;
    }

    &:first-child::after, /* span:nth-child(4) -> quarto span */
    &:nth-child(4)::after {
      content: '|';
      margin: 0 4px;
    }
  }

  @media (max-width: 425px) {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #dcdcdc;
    margin-top: 12px;
    padding: 16px 0;
    width: 100%;
    background: #fcfcfc;

    > span {
      display: flex;
      align-items: center;
      font-size: 14px;

      > svg {
        display: initial;
        visibility: visible;
        margin-right: 4px;
      }

      & + span {
        margin-left: 8px;
      }

      &:first-child::after, /* span:nth-child(4) -> quarto span */
      &:nth-child(4)::after {
        content: '';
      }

      &:first-child {
        order: 0;
      }

      &:nth-child(2) {
        display: none;
        visibility: hidden;
      }

      &:nth-child(4) {
        order: 2;
        margin-left: 8px;
      }

      &:last-child {
        order: 1;
      }
    }

    > br {
      display: none;
      visibility: hidden;
    }
  }
`;
