import s from './styles.module.scss';
import ListItem from '../ListItem/ListItem';
import AddTodo from '../AddTodo/AddTodo';

import fox from './../../assets/images/fox.svg'
import tree from './../../assets/images/tree.svg'
import leaves from './../../assets/images/leaves.svg'

export default function List() {
  const todos = [
    { id: 1, title: 'prepare for the interview', completed: true },
    { id: 2, title: 'water plants', completed: true },
    { id: 3, title: 'buy groceries', completed: false },
    { id: 4, title: 'read a book', completed: true },
  ];

  return (
    <div className={s.list}>
      <h1 className={s.listHeading}>to do list</h1>
      <AddTodo />
      <ul className={s.listLines}>
        {todos.map((item) => (
          <ListItem key={item.id} title={item.title} />
        ))}
      </ul>
      <img className={s.listImgFox} src={fox} alt="fox" />
      <img className={s.listImgTree} src={tree} alt="tree" />
      <img className={s.listImgLeaves} src={leaves} alt="leaves" />
    </div>
  );
}
