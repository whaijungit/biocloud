import { modalClass } from '.'
import { Button, Form, Input, Modal } from 'antd'


const RegisterModal: React.FC = () => {
    return (
        <Modal width={480} centered footer={null} className={modalClass}>
            <Form>
                <Form.Item name={'username'}>
                    <Input allowClear />
                </Form.Item>
                <Form.Item name={'password'}>
                    <Input.Password allowClear />
                </Form.Item>
                <Form.Item name={'password'}>
                    <Input.Password allowClear />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' style={{ marginBottom: '1em' }} block>登录</Button>
                    <Button block>注册</Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default RegisterModal;
