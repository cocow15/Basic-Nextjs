import Link from "next/link";
import styles from './Header.module.css';

export default function Header(){

    return(
        <header className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link href="/" legacyBehavior>
                    <a>Home</a>
                    </Link>
                </li>
                <li className={styles.item}><Link href="/login" legacyBehavior><a>Login</a></Link></li>
                <li className={styles.item}><Link href="/register" legacyBehavior><a>Register</a></Link></li>
                <li className={styles.item}><Link href="/users" legacyBehavior><a>Users</a></Link></li>
                <li className={styles.item}><Link href="/blog" legacyBehavior><a>Blog</a></Link></li>
            </ul>
        </header>

    )

}