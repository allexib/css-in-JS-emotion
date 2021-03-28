import {css, useTheme} from "@emotion/react";
import styled from "@emotion/styled";

function Text({children, isPrimary}) {
    const theme = useTheme();

    return <span css={css`
    font-size: 3rem;
    color: ${isPrimary ? theme.textColor.primary : theme.textColor.secondary};
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