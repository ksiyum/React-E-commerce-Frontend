import styled from "styled-components";

export const CategoryTitle = styled.h2`
  text-align: center;
  font-size: 38px;
  margin-bottom: 25px;
  text-transform: uppercase;
`;
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 50px;
`;
