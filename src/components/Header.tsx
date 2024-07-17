import styles from './Header.module.css'

import todolistLogo from '../assets/todolist-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={todolistLogo} alt='Logotipo do todolist' />
        </header>
    )
}