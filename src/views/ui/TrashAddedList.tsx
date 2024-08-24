import styles from './TrashAddedList.module.scss'
import TrashAddedItem from './TrashAddedItem';
import { TYPE_ICON } from '../../consts/trash';

const TrashAddedList = ({ addedList }) => {
  return (
    <div className={styles.wrap}>
      <ul className={styles.list}>
        {addedList.map(({type, text}, index)=>(
          <li key={`${type}-${index}`}>
            <TrashAddedItem index={index + 1} icon={TYPE_ICON[type].icon} text={TYPE_ICON[type].text} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TrashAddedList