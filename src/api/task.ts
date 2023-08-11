import { v4 } from 'uuid'
import request from './request'
import { ITool } from '@/interface/tool'
import { ITask } from '@/interface/task'
import { IResult, IResultPage } from '@/interface/resp'

const taskPath = '/task/'

export async function runTask(params: any, tool: ITool): IResult<any> {
    const param = {
        public_args: {
            task_id: v4(),
            tool: tool.id,
            type: tool.type,
            tool_id: tool.id,
            tool_name: tool.name,
            task_name: params.task_name,
        },
        tool_args: {
            ...params
        }
    }
    return await request.post(taskPath, param)
}

export async function queryList(params?: any): IResultPage<ITask> {
    return await request.get(taskPath, { params })
}

export async function remove(ids: number[]): IResultPage<ITask> {
    return await request.delete(taskPath, { data: { ids } })
}

export async function findById(task_id: number): IResult<ITask> {
    return await request.get(taskPath + task_id + '/')
}