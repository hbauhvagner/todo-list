import styles from './Empty.module.css'
import clipBoard from '../assets/clip-board.svg'

export function Empty() {
    return (
        <div className={styles.container}>
            <img src={clipBoard} alt='Logo de uma prancheta' />
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}