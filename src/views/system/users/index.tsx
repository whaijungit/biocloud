import './index.less'
import { Link } from '@/config'
import DrawerUserForm from './form'
import { IUser } from '@/interface/user'
import { useEffect, useState } from 'react'
import useSelectdKeys from '@/hooks/useMenuSelected'
import { Icon, IconType } from '@/components/common'
import { create, queryList, remove, setActive, update } from '@/api/user'
import { Button, Input, Popconfirm, Switch, Table, TableProps, Tooltip, notification } from 'antd'

const Users: React.FC = () => {
    const [total, setTotal] = useState(0)
    const [pageSize, setPageSize] = useState(10)
    const [loading, setLoading] = useState(false)
    const [pageNumber, setPageNumber] = useState(1)
    useSelectdKeys([`/${Link.sys}/${Link.users}`])
    const [curItem, setCurItem] = useState<IUser>()
    const [users, setUsers] = useState<IUser[]>([])
    const [search, setSearch] = useState('')
    const [openDrawer, setOpenDrawer] = useState(false)
    const fetchData = async () => {
        setLoading(true)
        const resp = await queryList({ page: pageNumber, pageSize, search })
        if (resp.code === 200) {
            setTotal(resp.data.count)
            setUsers(resp.data.results)
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchData()
    }, [pageNumber, pageSize, search])
    const handleClickCreate = () => {
        setOpenDrawer(true)
    }

    const handleClickEditor = (record: IUser) => {
        setOpenDrawer(true)
        setCurItem(record)
    }
    const handleChangeActive = async (record: IUser) => {
        setLoading(true)
        const r = await setActive(record.id, record.is_active)
        if (r.code === 200) {
            notification.success({ message: `修改 ${record.realname} 用户状态成功`, duration: 1 })
            fetchData()
        }
    }
    const handleCloseDrawerUserForm = () => {
        setOpenDrawer(false)
        setCurItem(undefined)
    }
    // api 请求
    const handleRemove = async (record: IUser) => {
        const r = await remove([record.id])
        if (r.code === 200) {
            fetchData()
            notification.success({ message: `删除 ${record.realname} 用户成功`, duration: 1 })
        }
    }
    const handleSubmit = async (values: IUser) => {
        console.log({ ...values, username: values.email });
        if (curItem) {
            const r = await update(curItem.id, { ...values, username: values.email })
            if (r.code === 200) {
                notification.success({ message: `修改用户 ${curItem.realname} 成功`, duration: 1 })
                fetchData()
            }
            return r.code === 200
        }
        else {
            const r = await create({ ...values, username: values.email })
            if (r.code === 200) {
                notification.success({ message: `新增用户 ${values.realname} 成功`, duration: 1 })
                fetchData()
            }
            return r.code === 200
        }
    }

    const colunmns: TableProps<IUser>['columns'] = [
        {
            title: '序号',
            render(_, __, index) {
                return index + 1
            }
        },
        {
            title: '姓名',
            dataIndex: 'realname',
        },
        {
            title: '角色',
            dataIndex: 'role_list'
        },
        {
            title: '邮箱',
            dataIndex: 'email'
        },
        {
            title: '单位',
            dataIndex: 'company'
        },
        {
            title: '手机号码',
            dataIndex: 'mobile',
        },
        {
            title: '状态',
            dataIndex: 'is_active',
            render(val, record) {
                return <Switch checkedChildren="开启" onChange={() => handleChangeActive(record)} unCheckedChildren="禁用" defaultChecked={val} />
            }
        },
        {
            width: 210,
            title: '操作',
            fixed: 'right',
            dataIndex: 'id',
            render(_, record) {
                return (
                    <div className='table-action'>
                        <Tooltip title="详情">
                            <div>
                                <Icon type={IconType.eye} />
                            </div>
                        </Tooltip>
                        <Tooltip title="修改">
                            <div>
                                <Icon onClick={() => handleClickEditor(record)} type={IconType.editor} />
                            </div>
                        </Tooltip>
                        <Tooltip title="修改密码">
                            <div>
                                <Icon type={IconType.pwd} />
                            </div>
                        </Tooltip>
                        <Popconfirm onConfirm={() => handleRemove(record)} placement='bottom' okButtonProps={{ danger: true }} title='删除用户'>
                            <div>
                                <Icon type={IconType.remove} />
                            </div>
                        </Popconfirm>
                    </div>
                )
            }
        }
    ]
    return (
        <section className="users">
            <DrawerUserForm
                title={curItem ? `修改用户 ${curItem.realname}` : `新曾用户`}
                user={curItem}
                open={openDrawer}
                onSubmit={handleSubmit}
                onClose={handleCloseDrawerUserForm}
            />
            <div className="table-header">
                <div className="table-header-filter">
                    <Input.Search defaultValue={search} onSearch={value => {
                        setPageNumber(1)
                        setPageSize(10)
                        setSearch(value)
                    }} allowClear placeholder='姓名/手机号码/邮箱' style={{ maxWidth: 220 }} />
                </div>
                <div className="table-header-action">
                    <Button onClick={handleClickCreate} type='primary' icon={<Icon type={IconType.user} />}>新增用户</Button>
                </div>
            </div>
            <Table
                rowKey={'id'}
                loading={loading}
                columns={colunmns}
                dataSource={users}
                scroll={{ x: 1200 }}
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

export default Users;
