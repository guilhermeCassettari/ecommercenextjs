import Head from 'next/head'
import products from '../../products.json'
import { fromImageFromUrl } from '../../utils/urls'
const product = products[0]

const Product = () =>{
    return(
        <div>
            <Head>
                {product.meta_title &&
                    <title>{product.meta_title}</title>
                }
                {product.meta_description &&
                <meta name='description' content={product.meta_description}/>
                }
            </Head>
            <h3>{product.name}</h3>
            <img src={fromImageFromUrl(product.image)}/>
            <h3>{product.name}</h3>
            <p>${product.price}</p>

            <p>
                {product.content}
            </p>
        </div>
    )
}

export default Product