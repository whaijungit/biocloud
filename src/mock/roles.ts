import { mock } from 'mockjs';
import { IRole } from '@/interface/role'
import { IPageData, IResponse } from '@/interface/resp'

mock(/\/api\/system\/roles\/$/, 'get', {
    code: 200,
    msg: '',
    data: {
        count: 10,
        "results": [
            {
                "id": 123,
                name: "@cname",
                desc: "@cparagraph(1, 3)",
                create_time: '@datetime()',
                update_time: '@datetime()',
                permissions: [1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
        ]
    }
} as IResponse<IPageData<IRole>>)

mock(/\/api\/system\/roles\//, 'delete', {
    code: 200,
    msg: '',
    data: true
} as IResponse<any>)

mock(/\/api\/system\/roles\//, 'patch', {
    code: 404,
    msg: '',
    data: true
} as IResponse<any>)

mock(/\/api\/system\/roles\/.*\//, 'get', {
    code: 200,
    msg: '123123',
    data: {
        id: 1,
        name: '角色',
        desc: 'hh123123'
    }
} as IResponse<IRole>)