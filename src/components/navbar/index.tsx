import './index.less'
import React from 'react'
import { Link } from '@/config'
import { useSelector } from 'react-redux'
import logo from '@/assets/images/logo.png'
import { IUserState } from '@/interface/user'
import { IRootState } from '@/interface/store'
import { NavLink, useNavigate } from 'react-router-dom'

interface IProps {
    isLogin: boolean
}

interface IEvent {
    onClickSys?: () => void
    onClickUser?: () => void
    onClickToTask?: () => void
}

const Navbar: React.FC<IEvent & IProps> = (props) => {
    const navigate = useNavigate()
    const user = useSelector<IRootState, IUserState>(store => store.user)
    const handleClickRegister: React.MouseEventHandler<HTMLAnchorElement> = (ev) => {
        ev.preventDefault()
    }

    const handleClickLogin: React.MouseEventHandler<HTMLAnchorElement> = (ev) => {
        ev.preventDefault()
    }

    const handleClickToTask: React.MouseEventHandler<HTMLAnchorElement> = (ev) => {
        ev.preventDefault()
        if (props.isLogin) {
            navigate(`/${Link.task}`)
        }
        props.onClickToTask && props.onClickToTask()
    }

    const handleClickSys: React.MouseEventHandler<HTMLAnchorElement> = (ev) => {
        ev.preventDefault()
        navigate(`/${Link.sys}`)
        props.onClickSys && props.onClickSys()
    }
    const handleCLickUser: React.MouseEventHandler<HTMLAnchorElement> = (ev) => {
        ev.preventDefault()
        navigate(`/${Link.user}`)
        props.onClickUser && props.onClickUser()
    }
    const renderNavItem = () => {
        if (user.data) {
            return (
                <>
                    {user.routes.length ? <NavLink onClick={handleClickSys} to={`/${Link.sys}`} className='navigation-item'>后台管理系统</NavLink> : null}
                    <NavLink onClick={handleClickToTask} to={`/${Link.task}`} className='navigation-item'>任务中心</NavLink>
                    <NavLink onClick={handleCLickUser} to={`/${Link.user}`} className='navigation-item avatar'>
                        <img src={user.data?.avatar} alt="" />
                    </NavLink>
                </>
            )
        }
        return (
            <>
                <NavLink onClick={handleClickToTask} to={`/${Link.task}`} className='navigation-item'>任务中心</NavLink>
                <a onClick={handleClickLogin} href="#" className='navigation-item'>登录</a>
                <a href="#" onClick={handleClickRegister} className='navigation-item register' >注册</a>
            </>
        )
    }

    return (
        <>
            <nav className='navigations'>
                <div className="navigation-group flex-grow">
                    <NavLink className='navigation-item' to={Link.home}>
                        <h1>
                            <span>华智生信云平台</span>
                            <img src={logo} alt="" />
                        </h1>
                    </NavLink>
                    <NavLink to={Link.home} className='navigation-item'>首页</NavLink>
                    <NavLink to={`/${Link.group}`} className='navigation-item'>多组学</NavLink>
                    <NavLink to={`/${Link.tool}`} className='navigation-item'>云工具</NavLink>
                </div>
                <div className="navigation-group">
                    {renderNavItem()}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
