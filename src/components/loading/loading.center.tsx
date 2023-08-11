import React from 'react'
import { Spin } from 'antd'

interface IProps {
    tip?: React.ReactNode
}

const LoadingCenter: React.FC<IProps> = (props) => {
    return (
        <div style={{ flexDirection: 'column', gap: 20, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Spin />
            {props.tip && <span style={{ fontSize: 16, color: 'gray' }}>{props.tip}</span>}
        </div>
    )
}

export default LoadingCenter;
