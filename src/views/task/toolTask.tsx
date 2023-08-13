import { Link } from '@/config'
import type { TableProps } from 'antd'
import { ITask } from '@/interface/task'
import { Popconfirm, Table, Typography } from 'antd'
import useSelectdKeys from '@/hooks/useMenuSelected'
import { TableAction, Icon, IconType, Status } from '@/components/common'


const ToolTask: React.FC = () => {
    useSelectdKeys([`/${Link.task}/${Link.tool}`])
    const columns: TableProps<ITask>['columns'] = [
        {
            title: '任务id',
            dataIndex: 'task_id',
            ellipsis: true,
            render(_, recode) {
                return (
                    <Typography.Paragraph style={{ marginBottom: 0 }} copyable>
                        {recode.task_id}
                    </Typography.Paragraph>
                )
            }
        },
        {
            ellipsis: true,
            title: '任务名称',
            dataIndex: 'task_name',
            render(_, recode) {
                return (
                    <Typography.Paragraph style={{ marginBottom: 0 }} copyable>
                        {recode.task_name}
                    </Typography.Paragraph>
                )
            }
        },
        {
            title: '类型',
            dataIndex: 'type',
            ellipsis: true,
            render(_, record) {
                if (record.status === 0) {
                    return (
                        <Status status={record.status}>
                            进行中
                        </Status>
                    )
                }
            }
        },
        {
            title: '状态',
            ellipsis: true,
            dataIndex: 'status',
            render(_, record) {
                if (record.status === 0) {
                    return (
                        <Status status={record.status}>
                            进行中
                        </Status>
                    )
                }
            }
        },
        {
            title: '开始时间',
            ellipsis: true,
            dataIndex: 'start_time'
        },
        {
            title: '结束时间',
            ellipsis: true,
            dataIndex: 'end_time'
        },
        {
            title: '操作', dataIndex: 'id',
            width: 120,
            render() {
                return (
                    <TableAction gap={18}>
                        <Icon type={IconType.eye} />
                        <Popconfirm placement='bottom' title='删除任务' >
                            <Icon type={IconType.remove} />
                        </Popconfirm>
                    </TableAction>
                )
            }
        },
    ]

    return (
        <section className='p-3'>
            <Table
                rowSelection={{}}
                columns={columns}
                scroll={{ x: 1200 }}
                dataSource={[]}
            />
        </section>
    )
}

export default ToolTask
