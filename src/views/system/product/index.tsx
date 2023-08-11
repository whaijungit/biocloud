import { Link } from "@/config"
import useSelectdKeys from "@/hooks/useMenuSelected"

const Product: React.FC = () => {
    useSelectdKeys([`/${Link.sys}/${Link.product}`])
    return (
        <>
            product
        </>
    )
}

export default Product;
