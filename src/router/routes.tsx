import User from '@/views/user'
import Home from '@/views/home'
import { Suspense, lazy } from 'react'
import { Biocloud } from '@/components/layout'
import { start, done, configure } from 'nprogress'
import { LayoutModel, Link, speed } from '@/config'
import { Navigate, RouteObject } from 'react-router-dom'

configure({
    speed,
})

const ToolDetail = lazy(async () => {
    start()
    const node = await import('../views/tool/detail')
    done()
    return node
})

const ToolTask = lazy(async () => {
    start()
    const node = await import('../views/task/toolTask')
    done()
    return node
})

const SystemDashbord = lazy(async () => {
    start()
    const node = await import('../views/system/dashbord')
    done()
    return node
})

const Tools = lazy(async () => {
    start()
    const node = await import('../views/system/tool')
    done()
    return node
})

const Products = lazy(async () => {
    start()
    const node = await import('../views/system/product')
    done()
    return node
})

const Roles = lazy(async () => {
    start()
    const node = await import('../views/system/roles')
    done()
    return node
})

const Permission = lazy(async () => {
    start()
    const node = await import('../views/system/permission')
    done()
    return node
})

const Users = lazy(async () => {
    start()
    const node = await import('../views/system/users')
    done()
    return node
})


const routes: RouteObject[] = [
    {
        path: Link.home,
        element: <Biocloud />,
        children: [
            {
                path: '*',
                element: <>404</>
            },
            {
                index: true,
                element: <Home />
            },
            {
                element: <Suspense>
                    <ToolDetail />
                </Suspense>,
                path: Link.tool + '/:id',
            },
            {
                path: Link.group,
                element: <>group</>
            },
            {
                path: Link.tool,
                element: <>tool</>
            }
        ]
    },
    {
        path: Link.task,
        element: <Biocloud title="任务中心" layout={LayoutModel.system} />,
        children: [
            {
                index: true,
                element: <>index</>
            },
            {
                path: Link.tool,
                element: <Suspense>
                    <ToolTask />
                </Suspense>
            },
            {
                path: '*',
                element: <>404</>
            }
        ]
    },
    {
        path: Link.user,
        element: <Biocloud title="个人中心" layout={LayoutModel.system} />,
        children: [
            {
                index: true,
                element: <User />
            },
            {
                path: '*',
                element: <>404</>
            }
        ]
    },
    {
        path: Link.sys,
        element: <Biocloud title="后台管理系统" layout={LayoutModel.system} />,
        children: [
            {
                index: true,
                element: <Navigate to={`/${Link.sys}/${Link.dashbord}`} />
            },
            {
                path: Link.dashbord,
                element: <Suspense>
                    <SystemDashbord />
                </Suspense>
            },
            {
                path: Link.tool,
                element: <Suspense>
                    <Tools />
                </Suspense>
            },
            {
                path: Link.roles,
                element: <Suspense>
                    <Roles />
                </Suspense>
            },
            {
                path: Link.permission,
                element: <Suspense>
                    <Permission />
                </Suspense>
            },
            {
                path: Link.product,
                element: <Suspense>
                    <Products />
                </Suspense>
            },
            {
                path: Link.users,
                element: <Suspense>
                    <Users />
                </Suspense>
            },
            {
                path: '*',
                element: <>404</>
            }
        ]
    },
]

export default routes;
