import routes from './routes'
import { useRoutes } from 'react-router-dom'

const Router: React.FC = () => {
    return useRoutes(routes)
}

export default Router;
