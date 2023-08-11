import { Link } from '@/config'
import { ITool } from '@/interface/tool'
import { Table, TableProps } from 'antd'
import useSelectdKeys from '@/hooks/useMenuSelected'

const Permissions: React.FC = () => {
    useSelectdKeys([`/${Link.sys}/${Link.permission}`])
    const getColumns = (): TableProps<ITool>['columns'] => {
        return [
            {
                title: '工具id',
                dataIndex: 'id',
            },
            {
                title: '名称',
                dataIndex: 'name',
            },
            {
                title: '英文名',
                dataIndex: 'name_en',
            },
            {
                title: '类型',
                dataIndex: 'type',
                render(_, record) {
                    return (
                        <div className='status'>
                            {record.type}-{record.type2}
                        </div>
                    )
                }
            },
        ]
    }

    return (
        <section className='p-2'>
            <Table
                dataSource={[]}
                scroll={{ x: 1500 }}
                columns={getColumns()}
            />
        </section>
    )
}

export default Permissions;
