import { ReactNode } from 'react'
import { Form, Input } from 'antd'
import { IRole } from '@/interface/role'
import { DrawerForm } from '@/components/drawer'

interface IProps {
    role?: IRole
    open?: boolean
    title?: ReactNode
}

interface IEvent {
    onClose?: () => void
    onSubmit?: (values: any) => Promise<boolean>
}

const DrawerRoleForm: React.FC<IProps & IEvent> = (props) => {
    return (
        <DrawerForm title={props.title} values={props.role} formLabelColSpan={6} onSubmit={props.onSubmit} onClose={props.onClose} open={props.open}>
            <Form.Item hasFeedback rules={[{ required: true }, { max: 4, message: '姓名过长' }, { min: 2, message: '姓名最小为两位字符' }]} label="角色名称" name='name'>
                <Input placeholder='请输入姓名' allowClear />
            </Form.Item>
            <Form.Item hasFeedback rules={[{ max: 100, message: '角色描述过长' }]} label='角色描述' name='desc'>
                <Input.TextArea style={{ height: 150 }} placeholder='请输入角色描述' allowClear />
            </Form.Item>
        </DrawerForm>
    )
}

export default DrawerRoleForm;
