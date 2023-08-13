import { Link } from '@/config'
import { useEffect, useState } from 'react'
import { queryList } from '@/api/permission'
import { StatusCode } from '@/interface/resp'
import { IPermission } from '@/interface/permission'
import useSelectdKeys from '@/hooks/useMenuSelected'
import { Table, TableProps, Tooltip, Popconfirm } from 'antd'
import { Icon, IconType, TableAction } from '@/components/common'

const Permissions: React.FC = () => {
    const [total, setTotal] = useState(0)
    const [pageSize, setPageSize] = useState(10)
    const [loading, setLoading] = useState(false)
    const [pageNumber, setPageNumber] = useState(1)
    const [datas, setDatas] = useState<IPermission[]>([])
    useSelectdKeys([`/${Link.sys}/${Link.permission}`])
    useEffect((() => {
        fetchData()
    }), [])
    const fetchData = async () => {
        setLoading(true)
        const r = await queryList()
        if (r.code === StatusCode.success) {
            setTotal(r.data.count)
            setDatas(r.data.results)
        }
        setLoading(false)
    }
    const getColumns = (): TableProps<IPermission>['columns'] => {
        return [
            {
                title: '权限名',
                dataIndex: 'name',
            },
            {
                title: '权限方法',
                dataIndex: 'method',
            },
            {
                title: '权限标识',
                dataIndex: 'sign',
            },
            {
                title: '权限描述',
                dataIndex: 'desc',
            },
            {
                title: '操作',
                dataIndex: 'type',
                render(_) {
                    return (
                        <TableAction>

                            <Tooltip title="编辑">
                                <div>
                                    <Icon type={IconType.editor} />
                                </div>
                            </Tooltip>
                            <Popconfirm okButtonProps={{ danger: true }} placement='bottom' title='删除权限'>
                                <div>
                                    <Icon type={IconType.remove} />
                                </div>
                            </Popconfirm>
                        </TableAction>
                    )
                }
            },
        ]
    }

    return (
        <section className='p-2'>
            <Table
                loading={loading}
                dataSource={datas}
                scroll={{ x: 1500 }}
                columns={getColumns()}
                pagination={{
                    current: pageNumber, pageSize, total, onChange: (pageNumber, pageSize) => {
                        setPageSize(pageSize)
                        setPageNumber(pageNumber)
                    }
                }}
            />
        </section>
    )
}

export default Permissions;
