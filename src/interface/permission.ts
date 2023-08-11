export interface IPermission {
    create_time: string
    desc: string
    id: number
    label: string
    menu: boolean
    method: string
    name: string
    path: string
    pid: number
    sign: string
    update_time: string
    children?: IPermission[]
}