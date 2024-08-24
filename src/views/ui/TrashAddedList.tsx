import glass from '../../img/glass.png';
import all from '../../img/all.png';
import paper from '../../img/paper.png';
import can from '../../img/can.png';
import etc from '../../img/etc.png';
import plastic from '../../img/plastic.png';
import plastic_bag from '../../img/plastic_bag.png';
import recycle from '../../img/recycle.png';
import styrofoam from '../../img/styrofoam.png';

import styles from './TrashAddedList.module.scss'
import TrashAddedItem from './TrashAddedItem';
import { TrashType } from '../../interfaces/trash';

const TYPE_ICON = {
  [TrashType.ALL]: { icon: all, text: '모든종류'},
  [TrashType.RECYCLE]: { icon: recycle, text: '재활용'},
  [TrashType.PLASTIC]: { icon: plastic, text: '플라스틱'},
  [TrashType.PAPER]: { icon: paper, text: '종이류'},
  [TrashType.PLASTIC_BAG]: { icon: plastic_bag, text: '비닐'},
  [TrashType.CAN]: { icon: can, text: '캔'},
  [TrashType.GLASS]: { icon: glass, text: '유리'},
  [TrashType.STYROFOAM]: { icon: styrofoam, text: '스티로폼'},
  [TrashType.ETC]: { icon: etc, text: '기타'},
}

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