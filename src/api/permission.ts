import request from './request'
import { IPermission } from '@/interface/permission'
import { IResult, IResultPage } from '@/interface/resp'

const permissionPath = '/system/permissions/'

export async function queryList(params?: any): IResultPage<IPermission> {
    return await request.get(permissionPath, { params })
}

export async function editor(id: number, params: any): IResult<IPermission> {
    return await request.put(permissionPath + id + '/', params)
}

export async function create(params: any): IResultPage<IPermission> {
    return await request.post(permissionPath, params)
}

export async function remove(id: number): IResultPage<IPermission> {
    return await request.delete(permissionPath + id + '/')
}

export async function findById(id: number): IResult<IPermission> {
    return await request.get(permissionPath + id + '/')
}

