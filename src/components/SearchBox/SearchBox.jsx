import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';
import styles from './SearchBox.module.css'; 

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label className={styles.label}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={handleChange}
          className={styles.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
