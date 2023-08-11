import Navbar from '../navbar'
import { Menu, MenuProps } from 'antd'
import { IMenuState } from '@/interface/menu'
import { IUserState } from '@/interface/user'
import { IRootState } from '@/interface/store'
import { menuActions } from '@/store/modules/menu'
import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LayoutModel, Link, menuStyles, prefix, taskMenu, userMenu, sysMenu } from '@/config'

interface IProps {
    layout?: LayoutModel
    menu?: React.ReactNode
    title?: React.ReactNode
    header?: React.ReactNode
}

const Biocloud: React.FC<IProps> = (props) => {
    const layout = props.layout!
    const location = useLocation()
    const dispatch = useDispatch()
    const [menuItems, setMenuItems] = useState<MenuProps['items']>([])
    const user = useSelector<IRootState, IUserState>(store => store.user)
    const menuState = useSelector<IRootState, IMenuState>(store => store.menu)
    const isLogin = user.data ? true : false
    useEffect(() => {
        if (location.pathname.startsWith(`/${Link.sys}`)) {
            setMenuItems(sysMenu)
        }
        if (location.pathname.startsWith(`/${Link.task}`)) {
            setMenuItems(taskMenu)
        }
        if (location.pathname.startsWith(`/${Link.user}`)) {
            setMenuItems(userMenu)
        }
    }, [location, user.routes])
    const handleClickSys = () => {
        setMenuItems(sysMenu)
    }
    const handleClickTask = () => {
        setMenuItems(taskMenu)
    }
    const handleClickMenu: MenuProps['onClick'] = (ev) => {
        dispatch(menuActions.setSelectedKeys([ev.key]))
    }

    const handleCLickUser = () => {
        setMenuItems(userMenu)
    }

    const renderMain = () => {
        if (layout === LayoutModel.system) {
            return (
                <section className={`${prefix}-main ${prefix}-aside-section`}>
                    <aside className={`${prefix}-aside-wrapper`}>
                        <div className={`${prefix}-aside-title`}>{props.title}</div>
                        <div className={`${prefix}-aside-menu`}>
                            <Menu
                                mode='inline'
                                items={menuItems}
                                style={menuStyles}
                                onClick={handleClickMenu}
                                selectedKeys={menuState.selectedKeys}
                                defaultOpenKeys={menuState.selectedKeys}
                            />
                        </div>
                    </aside>
                    <article className={`${prefix}-article`}>
                        <Outlet />
                    </article>
                </section>
            )
        }
        return (
            <main className={`${prefix}-main`}>
                <Outlet />
            </main>
        )
    }

    return (
        <section className={`${prefix}-app`}>
            <header className={`${prefix}-header`}>
                <Navbar onClickUser={handleCLickUser} onClickSys={handleClickSys} onClickToTask={handleClickTask} isLogin={isLogin} />
            </header>
            {renderMain()}
        </section>
    )
}

Biocloud.defaultProps = {
    layout: LayoutModel.cloud
}

export default Biocloud