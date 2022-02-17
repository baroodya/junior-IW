import styled from 'styled-components';

export const Grid = styled.div`
   width: 50%;
   display: flex;
   flex-direction: column;
   align-items: end;
`;

export const Row = styled.div`
   display: flex;
   flex-direction: row;
   transition: transform 1s;
`;

export const Cell = styled.div`
   display: flex;
   width: 10px;
   height: 10px;
   cursor: pointer;
`;