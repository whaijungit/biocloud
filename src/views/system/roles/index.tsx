import { Link } from '@/config'
import RoleListModal from './list'
import DrawerRoleForm from './form'
import { IRole } from '@/interface/role'
import { useEffect, useState } from 'react'
import { findById, queryList } from '@/api/role'
import useSelectdKeys from '@/hooks/useMenuSelected'
import { Icon, IconType, TableAction } from '@/components/common'
import { Button, Input, Popconfirm, Table, TableProps, Tooltip, notification } from 'antd'

const Tools: React.FC = () => {
    const [total, setTotal] = useState(0)
    const [pageSize, setPageSize] = useState(10)
    const [loading, setLoading] = useState(false)
    useSelectdKeys([`/${Link.sys}/${Link.roles}`])
    const [roles, setRoles] = useState<IRole[]>([])
    const [pageNumber, setPageNumber] = useState(1)
    const [curItem, setCurItem] = useState<IRole>()
    const [roleFormOpen, setRoleFormOpen] = useState(false)
    useEffect(() => {
        fetchData()
    }, [])

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
                ellipsis: true,
                dataIndex: 'desc',
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
                render(_, record) {
                    return (
                        <TableAction>
                            <Tooltip title="编辑">
                                <div>
                                    <Icon onClick={() => handleClickEditorRole(record)} type={IconType.editor} />
                                </div>
                            </Tooltip>
                            <Popconfirm placement='bottom' okButtonProps={{ danger: true }} title='删除角色'>
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

    const handleClickCreate = () => {
        setRoleFormOpen(true)
    }

    const handleCloseDrawerRoleForm = () => {
        setCurItem(undefined)
        setRoleFormOpen(false)
    }

    // api
    const fetchData = async () => {
        setLoading(true)
        try {
            const r = await queryList()
            if (r.code === 200) {
                setTotal(r.data.count)
                setRoles(r.data.results)
            }

        } catch (error) {
            notification.warning({ message: '数据请求异常' })
        }
        finally {
            setLoading(false)
        }

    }
    const handleClickEditorRole = async (recode: IRole) => {
        setLoading(true)
        const r = await findById(recode.id)
        if (r.code === 200) {
            setCurItem(r.data)
            setRoleFormOpen(true)
        }
        setLoading(false)
    }

    return (
        <section className='p-2'>
            <RoleListModal />
            <DrawerRoleForm
                role={curItem}
                open={roleFormOpen}
                onClose={handleCloseDrawerRoleForm}
                title={curItem ? `编辑角色 ${curItem.name}` : '新增角色'}
            />
            <div className="table-header">
                <div className="table-header-filter">
                    <Input.Search allowClear placeholder='角色名称/描述' style={{ maxWidth: 220 }} />
                </div>
                <div className="table-header-action">
                    <Button onClick={handleClickCreate} type='primary' icon={<Icon type={IconType.roles} />}>新增角色</Button>
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
