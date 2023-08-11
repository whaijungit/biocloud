import routes from './routes'
import { useRoutes } from 'react-router-dom'

const Router: React.FC = () => {
    const element = useRoutes(routes)

    return (
        <>
            {element}
        </>
    )
}

export default Router;
