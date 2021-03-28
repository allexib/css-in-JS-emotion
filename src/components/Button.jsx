import {css} from "@emotion/react";
import styled from "@emotion/styled";

function Text({children, isPrimary}) {
    return <span css={css`
    font-size: 3rem;
    color: ${isPrimary ? 'blue' : 'black'};
    `}
    >{children}</span>
}

const StyledButton = styled.button`
background-color: ${(props) => props.isPrimary ? props.theme.color.primary : props.theme.color.secondary};
border-radius: 1rem;

&:active {
apacity: 0.5;
}
`;

export function Button({children}) {
    return <StyledButton isPrimary>
        <Text isPrimary>{children}</Text>
    </StyledButton>;
}