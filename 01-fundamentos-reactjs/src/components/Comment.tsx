import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment(props){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/VictorAnhaya.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Victor Anhaya</strong>
                        <time title="02 de Setembro às  14:33"   dateTime="2025-08-31 15:33:03">Cerca de 1h atrás</time>
                    </div>

                    <button title="Deletar Comentário">
                        <Trash size={24} />
                    </button>
                </header>
                <p>{props.content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}