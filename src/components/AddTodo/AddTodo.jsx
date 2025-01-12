import s from './styles.module.scss';

export default function AddTodo() {
  return (
    <div className={s.addtodo}>
      <input className={s.addtodoInput} type="text" placeholder="let's plan the day"/>
      <button className={s.addtodoButton}>add</button>
    </div>
  );
}
