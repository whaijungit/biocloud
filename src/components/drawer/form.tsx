import { msg } from '@/utils'
import React, { useEffect, useState } from 'react'
import { Button, Drawer, Form, FormProps, notification } from 'antd'

interface IProps {
    values?: any
    open?: boolean
    title?: React.ReactNode
    formLabelColSpan?: number
    children?: React.ReactNode
    formLayout?: FormProps['layout']
}

interface IEvent {
    onClose?: () => void
    onSubmit?: (values: any) => Promise<boolean>
}

const DrawerForm: React.FC<IProps & IEvent> = (props) => {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (props.values) {
            form.setFieldsValue(props.values)
        }
    }, [props.values, form])

    const handleClose = () => {
        form.resetFields()
        props.onClose && props.onClose()
    }
    const handleSubmit = async () => {
        try {
            const rs = await form.validateFields()
            setLoading(true)
            if (props.onSubmit) {
                const r = await props.onSubmit(rs)
                if (r) {
                    handleClose()
                }
            }
        } catch (error) {
            notification.error({ message: msg(error).join('、'), duration: 1 })
        }
        finally {
            setLoading(false)
        }
    }
    return (
        <Drawer
            open={props.open}
            title={props.title}
            maskClosable={false}
            onClose={handleClose}
            className='drawer-form'
            footer={
                <>
                    <Button onClick={handleClose}>取消</Button>
                    <Button type='primary' loading={loading} onClick={handleSubmit}>提交</Button>
                </>
            }
        >
            <Form labelCol={{ span: props.formLabelColSpan }} layout={props.formLayout} form={form}>
                {props.children}
            </Form>
        </Drawer>
    )
}

DrawerForm.defaultProps = {
    formLabelColSpan: 5,
    formLayout: 'horizontal'
}

export default DrawerForm
