import { mock } from 'mockjs';
import { IResponse } from '@/interface/resp'
import { IUser } from '@/interface/user';

mock(/\/api\/system\/users\//, 'get', {
    code: 200,
    msg: '',
    data: {
        count: 200,
        // @ts-ignore
        "results|200": [
            {
                "id|+1": 1,
                email: '@email()',
                role_list: [1, 2],
                realname: "@cname",
                mobile: "@float()",
                is_active: '@boolean',
                company: '@ctitle(5)',
            }
        ]
    }
} as IResponse<any>)

mock(/\/api\/system\/users\//, 'delete', {
    code: 200,
    msg: '',
    data: true
} as IResponse<any>)


mock(/\/api\/system\/users\//, 'post', {
    code: 200,
    msg: '',
    data: true
} as IResponse<any>)


mock(/\/api\/system\/users\/*\//, 'put', {
    code: 200,
    msg: '',
    data: true
} as IResponse<any>)

mock(/\/api\/system\/users\/*\//, 'patch', {
    code: 200,
    msg: '',
    data: true
} as IResponse<any>)

mock(/\/api\/oauth\/info\//, 'get', {
    code: 200,
    msg: '',
    data: {
        is_active: true,
        realname: '吴海军',
        departmet: '创新研究院',
        user_storage_info: '',
        is_superuser: 'False',
        id: 1,
        profession: '生物信息',
        research: '生物信息',
        username: 'admin',
        company: '华智生技术有限公司',
        email: '1033161981@qq.com',
        avatar: 'data:image/png;base64\,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',
        roles_list: [1, 2, 3, 4, 5, 6],
        auths: {
            menus: [{

            }] as any[],
            actions: ['1', '2'] as any[]
        }
    }
} as IResponse<IUser>)