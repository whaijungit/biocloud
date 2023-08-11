
export interface ITool {
    id: number
    doc: string
    name: string
    enable: true
    logo: string
    desc: string
    type2: string
    ui_config: string
    name_en: string
    version: string
    type: string
    demo_file: string
    create_time: string
    update_time: string
    script_path: string
    exec_program: string
    createor_name: string
    possible_errors: string
}

export type IToolCategory = {
    label: string
    value: string
    children?: IToolCategory[]
}
export type IToolType = string[]

export const toolTypes: IToolCategory[] = [
    {
        label: '多组学',
        value: '多组学',
        children: [
            {
                label: '微生物',
                value: '微生物',
            },
            {
                label: '单细胞',
                value: '单细胞',
            }
        ]
    },
    {
        label: '云工具',
        value: '云工具',
        children: [
            {
                label: '高级绘图',
                value: '高级绘图',
            },
            {
                label: '基础绘图',
                value: '基础绘图',
            }
        ]
    }
]