export interface IPermission {
    id: number
    pid: number
    desc: string
    name: string
    path: string
    sign: string
    menu: boolean
    label: string
    method: string
    create_time: string
    update_time: string
    children?: IPermission[]
}