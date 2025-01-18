import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/store';
import s from './styles.module.scss';

export default function AddTodo() {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className={s.addtodo}>
      <input
        className={s.addtodoInput}
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="напишите новый план"
      />
      <button className={s.addtodoButton} onClick={handleAdd}>
        добавить
      </button>
    </div>
  );
}