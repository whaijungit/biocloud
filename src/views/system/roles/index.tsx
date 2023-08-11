import { Link } from '@/config'
import { queryList } from '@/api/role'
import { IRole } from '@/interface/role'
import { useEffect, useState } from 'react'
import { Icon, IconType } from '@/components/common'
import useSelectdKeys from '@/hooks/useMenuSelected'
import { Button, Input, Popconfirm, Table, TableProps, Tooltip } from 'antd'

const Tools: React.FC = () => {
    const [total, setTotal] = useState(0)
    const [pageSize, setPageSize] = useState(10)
    const [loading, setLoading] = useState(false)
    const [pageNumber, setPageNumber] = useState(1)
    useSelectdKeys([`/${Link.sys}/${Link.roles}`])
    const [roles, setRoles] = useState<IRole[]>([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        setLoading(true)
        const r = await queryList()
        if (r.code === 200) {
            setTotal(r.data.count)
            setRoles(r.data.results)
        }
        setLoading(false)
    }
    const getColumns = (): TableProps<IRole>['columns'] => {
        return [
            {
                title: '角色id',
                dataIndex: 'id',
            },
            {
                title: '名称',
                dataIndex: 'name',
            },
            {
                title: '描述',
                dataIndex: 'desc',
                ellipsis: true,
            },
            {
                title: '创建时间',
                dataIndex: 'create_time',
            },
            {
                title: '修改时间',
                dataIndex: 'update_time',
            },
            {
                width: 210,
                title: '操作',
                fixed: 'right',
                dataIndex: 'id',
                render() {
                    return (
                        <div className='table-action'>
                            <Tooltip title="编辑">
                                <div>
                                    <Icon type={IconType.editor} />
                                </div>
                            </Tooltip>
                            <Popconfirm placement='bottom' okButtonProps={{ danger: true }} title='删除角色'>
                                <div>
                                    <Icon type={IconType.remove} />
                                </div>
                            </Popconfirm>
                        </div>
                    )
                }
            },
        ]
    }

    return (
        <section className='p-2'>
            <div className="table-header">
                <div className="table-header-filter">
                    <Input.Search allowClear placeholder='角色名称/描述' style={{ maxWidth: 220 }} />
                </div>
                <div className="table-header-action">
                    <Button type='primary' icon={<Icon type={IconType.roles} />}>新增角色</Button>
                </div>
            </div>
            <Table
                rowKey={'id'}
                loading={loading}
                dataSource={roles}
                scroll={{ x: 1200 }}
                columns={getColumns()}
                pagination={{
                    pageSizeOptions: [10, 13],
                    current: pageNumber, pageSize, total, onChange(page, pageSize) {
                        setPageNumber(page)
                        setPageSize(pageSize)
                    }
                }}
            />
        </section>
    )
}

export default Tools;
