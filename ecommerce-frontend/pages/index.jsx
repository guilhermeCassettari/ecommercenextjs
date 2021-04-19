import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import products from '../products.json'
import { fromImageFromUrl } from '../utils/urls'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Ecommerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {products.map(product => {
          return (
            <div key={product.name} className={styles.product}>
              <Link href={`/products/${product.slug}`}>
                <a>
                  <div className={styles.product__Row}>
                    <div className={styles.product__ColImg}>
                      <img src={fromImageFromUrl(product.image)} />
                    </div>
                    <div className={styles.product__Col}>
                      {product.name} {product.price}
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          )
        })}
      </main>




    </div>
  )
}
