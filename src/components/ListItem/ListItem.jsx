import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../redux/store';
import s from './styles.module.scss';
import bin from './../../assets/images/bin.svg'

export default function ListItem({ id, title, completed }) {
    const dispatch = useDispatch();
  
    return (
      <li className={s.listitem}>
        <span
          className={s.listitemTitle}
          onClick={() => dispatch(toggleTodo(id))}
        >
          <input
            className={s.listitemTitleCheckbox}
            type="checkbox"
            checked={completed}
            readOnly
          />
          <span className={completed ? s.listitemCompleted : ''}>
            {title || 'Untitled task'}
          </span>
        </span>
        <button
          className={s.listitemDelete}
          onClick={() => dispatch(deleteTodo(id))}
        >
          <img src={bin} alt="remove" />
        </button>
      </li>
    );
  }