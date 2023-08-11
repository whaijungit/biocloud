import './index.less'
import { Button } from 'antd';

const User: React.FC = () => {
    return (
        <section className='user-page'>
            <div className="user-card"></div>
            <div className="user-table">
                <div className="user-col">
                    <label htmlFor="">密码:</label>
                    <div className="user-value">***********</div>
                    <Button type='primary'>修改密码</Button>
                </div>
                <div className="user-col">
                    <label htmlFor="">邮箱:</label>
                    <div className="user-value">1033161981@qq.com</div>
                    <Button type='primary'>修改邮箱</Button>
                </div>
                <div className="user-col">
                    <label htmlFor="">手机号码:</label>
                    <div className="user-value">18874010335</div>
                </div>
                <div className="user-col">
                    <label htmlFor="">空间:</label>
                    <div className="user-value">133MB/9.4GB</div>
                </div>
               
                <Button block type='link' className='logout'>退出登录</Button>
            </div>
        </section>
    )
}

export default User;
