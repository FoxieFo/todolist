import s from './styles.module.scss';

export default function ListItem( {text} ) {
    return (
        <li className={s.listitem}>• {text}</li>
    )
}