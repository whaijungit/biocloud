import React from 'react';

interface IProps {
    gap?: number
    children?: React.ReactNode
}

const Action: React.FC<IProps> = (props) => {
    return (
        <div style={{ gap: props.gap, fontSize: 20 }} className='action-wrapper'>
            {props.children}
        </div>
    )
}

Action.defaultProps = {
    gap: 10
}

export default Action;
