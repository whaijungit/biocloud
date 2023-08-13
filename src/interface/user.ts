import { PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit'
import { IPermission } from './permission'
import { IFlatteningItem } from './option'

export interface IUser {
    /** 用户id */
    id: number
    /** 用户 */
    sex: string
    /** 邮箱 */
    email: string
    /** 用户头像 */
    avatar: string
    /** 公司 */
    company: string
    /** 真实姓名 */
    realname: string
    /** 研究方向 */
    research: string
    /** 用户名 */
    username: string
    /** 部门 */
    departmet: string
    /** 专业 */
    profession: string
    is_active: boolean,
    permissions: string[]
    user_storage_info: string

    roles_list: number[]
    /** 权限 */
    auths: {
        /** 菜单权限 */
        menus: any[],
        /** 操作权限 */
        actions: string[]
    }
    /** 超级管理员 */
    is_superuser: 'True' | 'False'
}

export interface IUserState {
    loading: boolean
    actions: string[]
    data: IUser | null
    menus: IPermission[]
    routes: IFlatteningItem[]
}


export interface IUserReducer extends SliceCaseReducers<IUserState> {
    setLoading: (state: IUserState, action: PayloadAction<boolean>) => void
    setUser: (state: IUserState, action: PayloadAction<IUser | null>) => void
    setRoutes: (state: IUserState, action: PayloadAction<IFlatteningItem[]>) => void
    setMenus: (state: IUserState, action: PayloadAction<IPermission[]>) => void
    setActions: (state: IUserState, action: PayloadAction<string[]>) => void
}