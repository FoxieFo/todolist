import s from './styles.module.scss';
import ListItem from '../ListItem/ListItem';

export default function List() {
  return (
    <>
      <div className={s.list}>
        <h1 className={s.listHeading}>to do list</h1>
        <ul className={s.listLines}>
          <ListItem text={'hey there'} />
        </ul>
      </div>
    </>
  );
}
