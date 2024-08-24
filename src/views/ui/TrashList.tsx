import TrashItem from './TrashItem'
import styles from './TrashList.module.scss'
import glass from '../../img/glass.png';
import all from '../../img/all.png';
import paper from '../../img/paper.png';
import can from '../../img/can.png';
import etc from '../../img/etc.png';
import plastic from '../../img/plastic.png';
import plastic_bac from '../../img/plastic_bag.png';
import recycle from '../../img/recycle.png';
import styrofoam from '../../img/styrofoam.png';

const List = [
  {id: '1', icon: all, text: '모든종류', checked: true},
  {id: '2', icon: recycle, text: '재활용', checked: true},
  {id: '3', icon: plastic, text: '플라스틱', checked: true},
  {id: '4', icon: paper, text: '종이류', checked: true},
  {id: '5', icon: plastic_bac, text: '비닐', checked: true},
  {id: '6', icon: can, text: '캔', checked: true},
  {id: '7', icon: glass, text: '유리', checked: false},
  {id: '8', icon: styrofoam, text: '스티로폼', checked: true},
  {id: '9', icon: etc, text: '기타', checked: true},
]

const TrashList = () => {
  return (
    <div className={styles.wrap}>
      {List.map(({id, icon, text, checked}) => (
        <div className={styles.item} key={id}>
          <TrashItem id={id} icon={icon} text={text} checked={checked} />
        </div>
      ))}
      <div className={styles.item}>
        <button type='button' className={styles.button}>
          추가
        </button>
      </div>
    </div>
  )
}

export default TrashList