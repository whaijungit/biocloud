import './detail.less'
import Doc from '@/components/doc'
import Tabs from '@/components/tabs'
import Result from '@/components/result'
import { useEffect, useState } from 'react'
import { ToolParam } from '@/components/param'

import type { ITask } from '@/interface/task'
import type { ITool } from '@/interface/tool'
import type { IOption } from '@/interface/option'


interface IProps {
    tool?: ITool
    task?: ITask
    tabs?: IOption[]
    defaultTabKey?: string
}

/**
 * 默认况下会用useParam hook 完成查询工具接口cloudFindById(param.id)
 * 工具详情页 工具参数的渲染 历史参数的还原 运行结果需要传递当前任务的数据的展示
 * @param props 
 * @returns 
 */
const ToolDetail: React.FC<IProps> = (props) => {
    const [tabKey, setTabKey] = useState<undefined | string>(props.defaultTabKey)
    useEffect(() => {
        if (props.defaultTabKey) {
            setTabKey(props.defaultTabKey)
        }
    }, [props.defaultTabKey])

    return (
        <article className='tool-detail'>
            <div className='tool-detail-param'>
                <ToolParam onSubmit={async () => {
                    await new Promise(reslove => {
                        setTimeout(() => {
                            reslove(false)
                        }, 3000);
                    })
                }} />
            </div>
            <div className='tool-detail-doc'>
                <Tabs
                    items={props.tabs}
                    defaultActiveKey={tabKey}
                    onClickTabItem={option => {
                        setTabKey(option.value)
                    }}
                />
                <div className="tool-detail-doc-content">
                    {tabKey === 'doc' && <Doc />}
                    {tabKey === 'result' && <Result />}
                </div>
            </div>
        </article>
    )
}

ToolDetail.defaultProps = {
    defaultTabKey: 'doc',
    tabs: [{ label: '工具说明', value: 'doc' }]
}

export default ToolDetail;
