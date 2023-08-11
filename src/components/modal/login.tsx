import { modalClass } from './index'
import { Button,Form, Input, Modal } from 'antd'
import { CheckePwd, Icon, IconType } from '../common'

interface IProps {
    open?: boolean
}

const LoginModal: React.FC<IProps> = (props) => {
    return (
        <Modal  width={480} centered footer={null} className={modalClass} open={props.open}>
            <div className="modal-title">登录</div>
            <Form>
                <Form.Item>
                    <Input placeholder='请输入邮箱' allowClear prefix={<Icon styles={{ color: '#B8BDCB', fontSize: 20 }} type={IconType.user} />} />
                </Form.Item>
                <Form.Item>
                    <Input.Password placeholder='请输入密码' allowClear prefix={<Icon styles={{ color: '#B8BDCB', fontSize: 20 }} type={IconType.pwd} />} />
                </Form.Item>
                <Form.Item>
                    <Input placeholder='请输入验证码' allowClear prefix={<Icon styles={{ color: '#B8BDCB', fontSize: 20 }} type={IconType.captcha} />} />
                </Form.Item>
                <Form.Item initialValue={true} >
                    <CheckePwd/>
                </Form.Item>
                <Form.Item>
                    <Button block style={{ marginBottom: '16px' }} type='primary'>登录</Button>
                    <Button block>注册</Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default LoginModal;
