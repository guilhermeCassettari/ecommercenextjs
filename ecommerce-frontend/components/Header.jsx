import { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import AuthContext from '../context/AuthContext'


import styles from '../styles/Header.module.css'

export default () => {

    const router = useRouter()
    const isHome = router.pathname === '/'

    const goBack = (event) => {
        event.preventDefault()
        router.back()
    }

    const { user } = useContext(AuthContext)

    return (
        <header className={styles.nav}>
            {!isHome &&
                <div className={styles.back}>
                    <a href="#" onClick={goBack}>
                        {"<"} Back
                </a>
                </div>
            }
            <Link href="/">
                <a >
                    <div className={styles.title}>
                        The E-Commerce
                    </div>
                </a>
            </Link>

            <div className={styles.auth}>
                {user ? (
                    <Link href="/account">
                        {user.email}
                    </Link>
                ) :(
                    <Link href="/Login">
                        <a>Log In</a>
                    </Link>
                )}
            </div>
        </header>
    )
}