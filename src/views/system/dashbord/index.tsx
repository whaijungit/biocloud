import './index.less'
import { Link } from '@/config'
import useSelectdKeys from '@/hooks/useMenuSelected'

const Dashbord: React.FC = () => {
    useSelectdKeys([`/${Link.sys}/${Link.dashbord}`])
    return (
        <section className="dashbord">
        </section>
    )
}

export default Dashbord;
