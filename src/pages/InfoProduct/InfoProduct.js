import Detail from '../../components/Detail';
import { useParams } from 'react-router-dom';

import Product from '../../components/Product/index';

function InfoProduct() {
    let { productId } = useParams();

    return (
        <div className="Detail">
            <Detail productId={productId} />
            <h2>RELATED PRODUCTS</h2>
            <Product />
        </div>
    );
}

export default InfoProduct;
