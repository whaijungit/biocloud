import { Button, Input } from 'antd'
import { Icon, IconType } from './index'


const CaptchaFormula: React.FC = () => {
    return (
        <div className='captcha-wrapper'>
            <Input placeholder='请输入验证码' allowClear prefix={<Icon styles={{ color: '#B8BDCB', fontSize: 20 }} type={IconType.captcha} />} />
            <Button type='primary'></Button>
        </div>
    )
}

export default CaptchaFormula;
