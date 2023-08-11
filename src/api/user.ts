import request from './request'
import { IUser } from '@/interface/user'
import { IResult, IResultPage } from '@/interface/resp'

/**
 * 发送邮件验证 
 * @param email 邮箱
 * @param register 1注册 忘记密码0 
 * @returns 
 */
export async function sendCaptcha(email: string, register?: 1): IResult<any> {
    return await request.get('/system/users/forget_pwd/', {
        params: {
            email,
            register
        }
    })
}

/**
 * 邮件验证 
 * @param code 验证码
 * @returns 
 */
export async function verifyCaptcha(code: string): IResult<any> {
    return await request.post('/system/users/forget_pwd/', {
        code,
    })

}

/**
 * 用户注册 
 * @returns 
 */
export async function register(params: any): IResult<any> {
    return await request.post('/oauth/register/', params)
}

/**
 * 用户登录 
 * @returns 
 */
export async function login(params: any): IResult<{ token: string }> {
    return await request.post('/oauth/login/', params)
}

/**
 * 获取用户信息
 * @returns 
 */
export async function userInfo(): IResult<IUser> {
    let result = await request.get('/oauth/info/')
    let menus = result.data.auths.menus.map((v: any) => {
        if (v.children) {
            return {
                ...v,
                children: v.children.filter((cv: any) => cv.sign !== 'system-departments')
            }
        }
        return v
    })
    result.data.auths.menus = menus
    // @ts-ignore
    return result
}

const sysPath = '/system/users/'

/** 用户列表 */
export async function queryList(params?: any): IResultPage<IUser> {
    return await request.get(sysPath, { params })
}


/** 根据id查询 */
export async function findById(id: number): IResult<IUser> {
    return await request.get(sysPath + id + '/')
}

/** 删除 */
export async function remove(ids: number[]): IResultPage<IUser> {
    return await request.delete(sysPath, { data: { ids } })
}

/** 新建 */
export async function create(user: IUser): IResultPage<IUser> {
    return await request.post(sysPath, user)
}

/** 修改 */
export async function update(id: number, user: IUser): IResultPage<IUser> {
    return await request.put(sysPath + id + '/', user)
}

/** 密码重置 */
export async function resetPwd(id: number, params: any): IResult<any> {
    return await request.patch(sysPath + id + '/', params)
}

export async function publishRole(assinParams: { roles_ids: number[], user_id: number }): IResult<any> {
    return await request.post(sysPath + 'assign_roles/', assinParams)
}


export async function setActive(id: number, value: boolean): IResult<any> {
    return await request.patch(sysPath + id + '/', { is_active: ~~value })
}


export async function forgetEmail(email: string): IResult<string> {
    return await request.get('/system/users/forget_pwd/?email=' + email)
}


export async function forgetCatcha(code: string): IResult<string> {
    return await request.post('/system/users/forget_pwd/', {
        code
    })
}

/** 忘记密码 */
export async function forgetResetPwd(code: string, password: string, confirm_password: string): IResult<string> {
    return await request.patch('/system/users/forget_pwd/', {
        code,
        password,
        confirm_password
    })
}

