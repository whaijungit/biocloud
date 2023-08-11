import { MenuProps } from 'antd'
import { Link } from './constanst'
import { CSSProperties } from 'react'
import { NavLink } from 'react-router-dom'
import { Icon, IconType } from '@/components/common'

export const menuStyles: CSSProperties = {
    padding: 0,
    fontSize: 16,
    background: 'transparent',
    borderInlineEnd: '0px solid transparent'
}

const menuItemStyle: CSSProperties = {
    paddingInline: 20
}

export const sysMenu: MenuProps['items'] = [
    {
        key: '/' + Link.sys + '/' + Link.dashbord,
        style: menuItemStyle,
        icon: <Icon styles={{ marginRight: 7 }} type={IconType.dashbord} />,
        label: <NavLink to={'/' + Link.sys + '/' + Link.dashbord} >总览</NavLink>
    },
    {
        style: menuItemStyle,
        icon: <Icon styles={{ marginRight: 7 }} type={IconType.user} />,
        key: '/' + Link.sys + '/' + Link.users,
        label: <NavLink to={'/' + Link.sys + '/' + Link.users} >用户管理</NavLink>
    },
    {
        style: menuItemStyle,
        icon: <Icon styles={{ marginRight: 7 }} type={IconType.roles} />,
        key: '/' + Link.sys + '/' + Link.roles,
        label: <NavLink to={'/' + Link.sys + '/' + Link.roles} >角色管理</NavLink>
    },
    {
        style: menuItemStyle,
        icon: <Icon styles={{ marginRight: 7 }} type={IconType.permission} />,
        key: '/' + Link.sys + '/' + Link.permission,
        label: <NavLink to={'/' + Link.sys + '/' + Link.permission} >权限管理</NavLink>
    },
    {
        style: menuItemStyle,
        icon: <Icon styles={{ marginRight: 7 }} type={IconType.tool} />,
        key: '/' + Link.sys + '/' + Link.tool,
        label: <NavLink to={'/' + Link.sys + '/' + Link.tool} >工具管理</NavLink>
    },
    {
        style: menuItemStyle,
        key: '/' + Link.sys + '/' + Link.product,
        icon: <Icon styles={{ marginRight: 7 }} type={IconType.product} />,
        label: <NavLink to={'/' + Link.sys + '/' + Link.product} >运营管理</NavLink>
    }
]

export const taskMenu: MenuProps['items'] = [
    {
        key: '/' + Link.task + '/' + Link.dashbord,
        icon: <Icon styles={{ marginRight: 7 }} type={IconType.dashbord} />,
        label: <NavLink children='总览' to={`/${Link.task}`} />
    },
    {
        key: '/' + Link.task,
        label: '我的分析',
        style: {
            padding: 0
        },
        icon: <Icon styles={{ marginRight: 7 }} type={IconType.task} />,
        children: [
            {
                key: `/${Link.task}/${Link.project}`,
                label: <NavLink children='项目' to={`/${Link.task}/${Link.project}`} />
            },
            {
                key: `/${Link.task}/${Link.tool}`,
                label: <NavLink children='工具' to={`/${Link.task}/${Link.tool}`} />
            }
        ],
    },
    {
        key: Link.data,
        label: '我的数据',
        style: {
            padding: 0
        },
        icon: <Icon styles={{ marginRight: 7 }} type={IconType.data} />,
        children: [
            {
                key: Link.data + '/' + Link.project,
                label: <NavLink children='项目' to={`/${Link.task}/${Link.project}`} />
            },
            {
                key: 'task-tool',
                label: <NavLink children='工具' to={`/${Link.task}`} />
            }
        ],
    }
]

export const userMenu: MenuProps['items'] = [
    {
        key: Link.user,
        style: menuItemStyle,
        label: <NavLink to={'/' + Link.user} >账户信息</NavLink>,
        icon: <Icon styles={{ marginRight: 7 }} type={IconType.account} />,
    },
    {
        key: Link.message,
        style: menuItemStyle,
        icon: <Icon styles={{ marginRight: 7 }} type={IconType.msg} />,
        label: <NavLink to={'/' + Link.user + '/' + Link.message} >消息</NavLink>
    }
] 