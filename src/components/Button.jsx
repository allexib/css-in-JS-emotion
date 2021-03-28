
import {css} from "@emotion/react";

function Text({children}) {
    return <span css={css`
    font-size: 3rem;
    color: blue;
    `}
    >{children}</span>
}

export function Button({children}) {
    return <button>
        <Text>{children}</Text>
    </button>;
}