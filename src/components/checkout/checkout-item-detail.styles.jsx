import styled  from "styled-components";

export const ProductDetailContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const ImageDiv = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Price = styled.p`
  width: 23%;
`

export const Name = styled.p`
  width: 23%;
`;

export const Quantity = styled.p`
  width: 23%;
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.p`
  margin: 0 10px;
`;
  
export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
