export interface IResponse<T> {
    data: T
    msg: string
    code: StatusCode
}

export enum StatusCode {
    onauth = 401,
    success = 200,
    notFound = 404,
    serverError = 500
}

export interface IPageData<T> {
    results: T[]
    count: number
}

export type IResult<T = any> = Promise<IResponse<T>>
export type IResultPage<T = any> = Promise<IResponse<IPageData<T>>>