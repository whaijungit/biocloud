import { ColorPicker } from 'antd'
import { ColorValueType } from 'antd/es/color-picker/interface'

interface IProps {
    value?: string
}

interface IEvent {
    onChange?: (hex: ColorValueType) => void
}

const Color: React.FC<IProps & IEvent> = (props) => {

    return (
        <div className="color-group-wrapper">
            <ColorPicker
                {...props}
            />

        </div>
    )
}

export default Color