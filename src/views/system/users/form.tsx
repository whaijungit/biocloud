import { ReactNode } from 'react'
import { requiredRule } from '@/config'
import { IUser } from '@/interface/user'
import { Form, Input, Radio, Select } from 'antd'
import { DrawerForm } from '@/components/drawer'

interface IProps {
    user?: IUser
    open?: boolean
    title?: ReactNode
}

interface IEvent {
    onClose?: () => void
    onSubmit?: (values: any) => Promise<boolean>
}

const DrawerUserForm: React.FC<IProps & IEvent> = (props) => {
    return (
        <DrawerForm title={props.title} values={props.user} formLabelColSpan={6} onSubmit={props.onSubmit} onClose={props.onClose} open={props.open}>
            <Form.Item hasFeedback rules={[{ required: true }, { max: 4, message: '姓名过长' }, { min: 2, message: '姓名最小为两位字符' }]} label="姓名" name='realname'>
                <Input placeholder='请输入姓名' allowClear />
            </Form.Item>
            <Form.Item hasFeedback rules={[{ type: 'email', message: '邮箱格式有误' }, ...requiredRule,]} label='邮箱' name='email'>
                <Input placeholder='请输入邮箱' allowClear />
            </Form.Item>
            {props.user ? null : <>
                <Form.Item hasFeedback rules={[{ required: true }, { max: 16, message: '密码最大字符为16位' }, { min: 8, message: '密码最小字符为8位' }]} label='密码' name='password'>
                    <Input.Password placeholder='请输入密码' allowClear />
                </Form.Item>
                <Form.Item hasFeedback rules={[({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('两次密码不一致'));
                    },
                }), ...requiredRule]} dependencies={['password']} label='确认密码' name='confirm_password'>
                    <Input.Password placeholder='请输入确认密码' allowClear />
                </Form.Item>
            </>}
            <Form.Item hasFeedback rules={[...requiredRule,]} label='角色' name='role_list'>
                <Select placeholder='请选择角色' allowClear options={[{ lable: '开发者', value: 1 }, { lable: '审核员', value: 2 }]} mode='multiple' />
            </Form.Item>
            <Form.Item hasFeedback rules={[{ pattern: /^1[3456789]\d{9}$/, message: '手机格式不正确' }, ...requiredRule,]} label='手机号码' name='mobile'>
                <Input placeholder='请输入手机号码' allowClear />
            </Form.Item>
            <Form.Item hasFeedback rules={[{ max: 50, message: '单位名称过长' }, ...requiredRule,]} label='单位' name='company'>
                <Input.TextArea style={{ height: 150 }} placeholder='请输入单位' allowClear />
            </Form.Item>
            <Form.Item name='sex' label='性别'>
                <Radio.Group
                    options={[{ label: '男', value: '男' }, { label: '男', value: '女' }]}
                />
            </Form.Item>
            <Form.Item hasFeedback rules={[{ max: 50, message: '专业字符最长50个字符' }, ...requiredRule,]} label='专业' name='profession'>
                <Input placeholder='请输入专业' allowClear />
            </Form.Item>
            <Form.Item hasFeedback rules={[{ max: 50, message: '专业字符最长50个字符' }]} label='研究方向' name='research'>
                <Input placeholder='请输入课题组研究方向' allowClear />
            </Form.Item>
        </DrawerForm>
    )
}

export default DrawerUserForm;
