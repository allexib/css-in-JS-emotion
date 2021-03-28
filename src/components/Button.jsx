import {css} from "@emotion/react";
import styled from "@emotion/styled";

function Text({children}) {
    return <span css={css`
    font-size: 3rem;
    color: blue;
    `}
    >{children}</span>
}

const StyledButton = styled.button`
background-color: ${(props) => props.isPrymary ? 'white' : 'lightblue'};
border-radius: 1rem;

&:active {
apacity: 0.5;
}
`;

export function Button({children}) {
    return <StyledButton isPrymary>
        <Text>{children}</Text>
    </StyledButton>;  
}