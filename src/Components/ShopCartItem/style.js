import styled from 'styled-components';
import { alignCenter, cardActionBtn, modelNamingTypograhy, priceTypography } from '@/styles';

export const CartItem = styled.li`
${alignCenter};
justify-content: space-between;
padding: 20px;
border-radius: 20px;
border: 1px solid #f3f3f3;
& > div:first-child {
    width: 70px;
    height: 70px;
}
& > div:first-child + div {
    width: 150px;
}
& > div:first-child + div > p:first-child{
    ${modelNamingTypograhy};
    margin-bottom: 8px;
}
& > div:first-child + div > p:last-child{
    ${priceTypography};
}
& > button {
    ${cardActionBtn};
}
& > button > svg {
    color: #B5B5B5;
    transition: color 0.5s ease, scale 0.5s ease;
}
& > button:hover > svg {
    color: black;
    scale: 1.1;
}
`