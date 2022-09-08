import styled from "styled-components";

export const CartItemContainer = styled.div`
display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: nowrap;
    height: 80px;
    padding: 3%;
`;

export const ItemDetailsContainer = styled.div`
width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
`;

export const Image = styled.img`
width: 30%;
   height: 100%;
`;

export const Name = styled.p`
    font-size: 16px;
`;



