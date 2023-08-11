import request from './request'
import { ITool, IToolCategory } from '@/interface/tool'
import { IResult, IResultPage } from '@/interface/resp'

const toolPath = '/system/tool/'

const cloudPath = '/cloud/tool/'

export async function queryList(params?: any): IResultPage<ITool> {
    return await request.get(toolPath, {
        params,
    })
}

export async function queryCloudList(params?: any): IResultPage<ITool> {
    return await request.get(cloudPath, {
        params,
    })
}

export async function cloudFindById(id?: number): IResult<ITool> {
    return await request.get(cloudPath + id + '/')
}

export async function runTool(parmas: any): IResultPage<ITool> {
    return await request.post(toolPath, parmas)
}

export async function verifyTool(tool_id: number, audit_status: 0 | 1): IResult<ITool> {
    return await request.patch(toolPath + 'audit/' + tool_id + '/', { audit_status })
}

export async function createTool(params?: ITool): IResult<ITool> {
    return await request.post(toolPath, params)
}

export async function findById(id?: number): IResult<ITool> {
    return await request.get(toolPath + id + '/')
}

export async function editor(id: number, params?: ITool): IResult<ITool> {
    return await request.put(toolPath + id + '/', params)
}

export async function enable(id: number, value: 0 | 1): IResult<ITool> {
    return await request.patch(toolPath + id + '/', {
        enable: value
    })
}

export async function getCategory(): IResult<IToolCategory[]> {
    return await request.get(toolPath + 'type2/')
}

export async function remove(ids: number[]): IResult<any> {
    return await request.delete(toolPath, { data: { ids } })
}