import './index.less'
import { prefix } from '@/config';
import { Button, Form } from 'antd';
import Editor from '@/components/doc/editor';


const Home: React.FC = () => {
    const [form] = Form.useForm()
    return (
        <div className={`${prefix}-home`}>
            <Form onFinish={(v) => {
                console.log(v);
            }} form={form}>
                <Form.Item name='ui_config'>
                    <Editor />
                </Form.Item>
                <Form.Item >
                    <Button htmlType='submit' block>save</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Home;
