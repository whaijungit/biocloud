import './index.less'
import { useEffect, useState } from 'react'
import { IOption } from '@/interface/option'

interface IProps {
    items?: IOption[]
    defaultActiveKey?: string
    onClickTabItem?: (option: IOption) => void
}

const Tabs: React.FC<IProps> = (props) => {
    const [activeKey, setActiveKey] = useState('')
    useEffect(() => {
        if (props.defaultActiveKey) {
            setActiveKey(props.defaultActiveKey)
        }
    }, [])
    const items = props.items!
    if (items.length) {
        return (
            <div className='tabs'>
                {items.map(item => (
                    <div
                        key={item.value}
                        onClick={() => {
                            setActiveKey(item.value)
                            if (props.onClickTabItem) {
                                props.onClickTabItem(item)
                            }
                        }}
                        className={`tabs-item${item.value === activeKey ? ' active' : ''}`}
                    >
                        {item.label}
                    </div>
                ))}
            </div>
        )
    }
    return (
        <>

        </>
    )
}

Tabs.defaultProps = {
    items: []
}

export default Tabs;
