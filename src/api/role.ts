import request from './request'
import { IRole } from '@/interface/role'
import { IResult, IResultPage } from '@/interface/resp'

const rolePath = '/system/roles/'

export async function create(role: any): IResult<any> {
    return await request.post(rolePath, role)
}

export async function editor(id: number, role: any): IResult<any> {
    return await request.put(rolePath + id + '/', role)
}

export async function remove(role_id: number): IResult<any> {
    return await request.delete(rolePath + role_id + '/')
}

export async function queryList(params?: any): IResultPage<IRole> {
    return await request.get(rolePath, { params })
}

export async function publishPermssion(role_id: number, permissions_ids: number[]): IResult<any> {
    return await request.post(rolePath + 'roles_auth/', { role_id, permissions_ids })
}

export async function findById(id: number): IResult<IRole> {
    return await request.get(rolePath + id + '/')
}