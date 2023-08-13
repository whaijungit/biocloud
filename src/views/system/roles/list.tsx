import { queryList } from '@/api/role'
import { IRole } from '@/interface/role'
import { useEffect, useState } from 'react'
import { StatusCode } from '@/interface/resp'
import { Button, Modal, Table, TableProps } from 'antd'

interface IProps {
    open?: boolean
    width?: number
    isLoading?: boolean
    defaultRoleIds?: number[]
}

interface IEvent {
    onClose?: () => void
    onConfirm?: (roleIds: number[]) => void
}

const RoleListModal: React.FC<IProps & IEvent> = (props) => {
    const [total, setTotal] = useState(0)
    const [pageSize, setPageSize] = useState(10)
    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState<IRole[]>([])
    const [pageNumber, setPageNumber] = useState(1)
    const [roleIds, setRoleIds] = useState<number[]>([])
    useEffect(() => {
        if (props.defaultRoleIds) {
            setRoleIds(props.defaultRoleIds)
        }
    }, [props.defaultRoleIds])
    useEffect(() => {
        fetchData()
    }, [pageNumber, pageSize])

    const cloumns: TableProps<IRole>['columns'] = [
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

    ]

    const fetchData = async () => {
        setLoading(true)
        const r = await queryList()
        if (r.code === StatusCode.success) {

            setDatas(r.data.results)
            setTotal(r.data.count)
        }
        setLoading(false)
    }
    const handleCancel = () => {
        if (props.onClose) {
            props.onClose()
        }
    }
    const handleConfirm = async () => {
        if (props.onConfirm) {
            props.onConfirm(roleIds)
        }
    }
    return (
        <Modal
            title="分配角色"
            closable={false}
            open={props.open}
            width={props.width}
            maskClosable={false}
            onCancel={handleCancel}
            footer={
                <>
                    <Button onClick={handleCancel}>取消</Button>
                    <Button loading={props.isLoading} onClick={handleConfirm} type='primary'>确定</Button>
                </>
            }
        >
            <Table
                rowKey={'id'}
                columns={cloumns}
                loading={loading}
                dataSource={datas}
                rowSelection={{
                    selectedRowKeys: roleIds,
                    onChange(roleIds) {
                        setRoleIds(roleIds as number[])
                    }
                }}
                pagination={{
                    current: pageNumber, pageSize, total, onChange: (pageNumber, pageSize) => {
                        setPageSize(pageSize)
                        setPageNumber(pageNumber)
                    }
                }}
            />
        </Modal>
    )
}

export default RoleListModal;
