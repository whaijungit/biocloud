import React from 'react'

interface IProps {
    status: number
    children: React.ReactNode
}

const Status: React.FC<IProps> = (props) => {
    const statusCls = () => {
        if (props.status === 0) {
            return ' runing'
        }
        else if (props.status === 1) {
            return ' success'
        }
        else if (props.status === 2) {
            return ' reject'
        }
    }
    return (
        <span className={`status${statusCls()}`}>
            {props.children}
        </span>
    )
}

export default Status
