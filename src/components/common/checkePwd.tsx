import { Button, Checkbox } from 'antd'

interface IProps {
    value?: boolean
}

interface IEvent {
    onClickForgotPwd?: () => void
    onChange?: (val: boolean) => void
}

const CheckedPwd: React.FC<IEvent & IProps> = (props) => {
    return (
        <div className='checked-wrapper'>
            <Checkbox value={props.value} onChange={(e) => props.onChange && props.onChange(e.target.checked)}>记住密码</Checkbox>
            <Button onClick={props.onClickForgotPwd} type='link'>忘记密码</Button>
        </div>
    )
}

export default CheckedPwd