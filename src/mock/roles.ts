import { mock } from 'mockjs';
import { IPageData, IResponse } from '@/interface/resp'
import { IRole } from '@/interface/role';

mock(/\/api\/system\/roles\//, 'get', {
    code: 200,
    msg: '',
    data: {
        count: 10,
        "results": [
            {
                "id": 1,
                name: "@cname",
                desc: "@cparagraph(1, 3)",
                create_time: '@datetime()',
                update_time: '@datetime()',
                permissions: [1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
        ]
    }
} as IResponse<IPageData<IRole>>)

mock(/\/api\/system\/users\//, 'delete', {
    code: 200,
    msg: '',
    data: true
} as IResponse<any>)

mock(/\/api\/system\/users\//, 'patch', {
    code: 404,
    msg: '',
    data: true
} as IResponse<any>)