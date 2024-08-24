import glass from '../../img/glass.png';
import all from '../../img/all.png';
import box from '../../img/box.png';
import can from '../../img/can.png';
import etc from '../../img/etc.png';
import pet from '../../img/pet.png';
import plastic from '../../img/plastic.png';
import recycling from '../../img/recycling.png';
import styrofoam from '../../img/styrofoam.png';

import styles from './TrashAddedList.module.scss'
import TrashAddedItem from './TrashAddedItem';

const List = [
  {id: '1', icon: glass, text: '유리'},
  {id: '2', icon: all, text: '모든종류'},
  {id: '3', icon: box, text: '종이류'},
  {id: '4', icon: can, text: '캔'},
  {id: '5', icon: etc, text: '기타'},
  {id: '6', icon: pet, text: '플라스틱'},
  {id: '7', icon: plastic, text: '비닐'},
  {id: '8', icon: recycling, text: '재활용'},
  {id: '9', icon: styrofoam, text: '스티로폼'},
]

const TrashAddedList = () => {
  return (
    <div className={styles.wrap}>
      <ul className={styles.list}>
        {List.map(({id, icon, text}, index)=>(
          <li key={id}>
            <TrashAddedItem index={index + 1} icon={icon} text={text} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TrashAddedList