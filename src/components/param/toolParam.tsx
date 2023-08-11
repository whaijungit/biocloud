import { ITool } from '@/interface/tool'
import { useEffect, useState } from 'react'
import { requiredRule, task_name } from '@/config'
import { ReloadOutlined } from '@ant-design/icons'
import { Button, Form, Input, notification } from 'antd'

interface IProps {
    tool?: ITool
    params?: any
}

interface IEvent {
    onSubmit?: (values: any) => Promise<void>
}

const ToolParam: React.FC<IProps & IEvent> = (props) => {
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm()
    useEffect(() => {
        if (props.params) {
            form.setFieldsValue(props.params)
        }
    }, [props.params])
    const handleSubmit = async () => {
        try {
            setLoading(true)
            const values = await form.validateFields()
            if (props.onSubmit) {
                await props.onSubmit(values)
            }
        } catch (reason) {
            notification.error({ message: '缺少必填项', duration: 1 })
        }
        finally {
            setLoading(false)
        }
    }

    const handleResetFormData = () => {
        form.resetFields()
        form.setFieldValue(task_name, '123123')
    }

    return (
        <div className='tool-param-wrapper'>
            <Form form={form} layout='vertical' className='tool-param-form'>
                <Form.Item rules={[...requiredRule]} name={task_name} label='任务名称'>
                    <Input allowClear placeholder='请输入任务名称' />
                </Form.Item>
            </Form>
            <div className='tool-param-action'>
                <Button loading={loading} onClick={handleSubmit} type='primary'>运行</Button>
                <Button onClick={handleResetFormData} icon={<ReloadOutlined start={10} />} type='default'>重置参数</Button>
            </div>
        </div>
    )
}

export default ToolParam;
