import { InputNumber, Slider } from 'antd'

interface IProps {
    value?: number
    steps?: number
    max?: number
    min?: number
}

interface IEvent {
    onChange?: (value: any) => void
}

const NumberSlider: React.FC<IProps & IEvent> = (props) => {
    return (
        <div className='number-slider-wrapper'>
            <div className='slider-wrapper'>
                <Slider tooltip={{ formatter: () => props.value }} {...props} />
            </div>
            <div className="input-number-wrapper">
                <InputNumber {...props} step={props.steps} />
            </div>
        </div>
    )
}

export default NumberSlider
