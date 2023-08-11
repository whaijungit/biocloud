import { ThemeConfig } from 'antd'
export const speed = 800;
export const prefix = 'biocloud'
export const tokenKey = 'token'
export const task_name = 'task_name'
export const Link = {
    home: '/',
    data: 'data',
    task: 'task',
    sys: 'system',
    user: 'user',
    users: 'users',
    tool: 'tools',
    roles: 'roles',
    group: 'group',
    product: 'product',
    project: 'project',
    message: 'message',
    dashbord: 'dashbord',
    permission: 'permissions',
}

export enum LayoutModel {
    cloud = 'cloud',
    system = 'system'
}

export const adminKey = 'admin'
export const navigations = [
    {
        label: '首页',
        link: Link.home,
    },
    {
        label: '多组学',
        link: '/' + Link.group,
    },
    {
        label: '云工具',
        link: '/' + Link.tool,
    },
]

export const theme: ThemeConfig = {
    token: {
        fontSize: 14,
        borderRadius: 4,
        colorPrimary: '#0C6DFF',
        colorTextBase: '#181D28',
    }
}