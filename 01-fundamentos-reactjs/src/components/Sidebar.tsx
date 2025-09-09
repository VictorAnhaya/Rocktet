import{PencilLine} from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar() {
    return(
       <aside className={styles.sidebar}>
        <img
         className={styles.cover} 
         src='https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=500&auto=format&fit=crop&ixlib=rb-50&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      
      
       <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/VictorAnhaya.png"/>

        <strong>Victor Anhaya</strong>
        <span>Developer Web</span>
       </div>
       
       <footer>
        <a href="#">
            <PencilLine size={20}/>
            Editar seu perfil
        </a>
       </footer>
       </aside> 
    );
}