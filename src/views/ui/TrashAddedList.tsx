import glass from '../../img/glass.png';
import all from '../../img/all.png';
import paper from '../../img/paper.png';
import can from '../../img/can.png';
import etc from '../../img/etc.png';
import plastic from '../../img/plastic.png';
import plastic_bac from '../../img/plastic_bag.png';
import recycle from '../../img/recycle.png';
import styrofoam from '../../img/styrofoam.png';

import styles from './TrashAddedList.module.scss'
import TrashAddedItem from './TrashAddedItem';

const List = [
  {id: '1', icon: all, text: '모든종류'},
  {id: '2', icon: recycle, text: '재활용'},
  {id: '3', icon: plastic, text: '플라스틱'},
  {id: '4', icon: paper, text: '종이류'},
  {id: '5', icon: plastic_bac, text: '비닐'},
  {id: '6', icon: can, text: '캔'},
  {id: '7', icon: glass, text: '유리'},
  {id: '8', icon: styrofoam, text: '스티로폼'},
  {id: '9', icon: etc, text: '기타'},
]

const TrashAddedList = () => {
  return (
    <div className={styles.wrap}>
      <ul className={styles.list}>
        {List.map(({id, icon, text}, index)=>(
          <li className={styles.item} key={id}>
            <TrashAddedItem index={index + 1} icon={icon} text={text} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TrashAddedList