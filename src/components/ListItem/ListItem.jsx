import s from './styles.module.scss';
import bin from './../../assets/images/bin.svg'

export default function ListItem( {id, title, completed} ) {
    return (
        <li className={s.listitem}>
            <span className={s.listitemTitle}>
                <input className={s.listitemTitleCheckbox} type="checkbox"/>
                <span className={completed ? s.listitemCompleted : ''}>{title || 'Untitled task'}</span>
            </span>
            <button className={s.listitemDelete}><img src={bin} alt="remove" /></button>
        </li>
    )
}