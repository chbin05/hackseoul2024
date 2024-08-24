import TrashItem from './TrashItem'
import styles from './TrashList.module.scss'
import glass from '../../img/glass.png';
import all from '../../img/all.png';
import box from '../../img/box.png';
import can from '../../img/can.png';
import etc from '../../img/etc.png';
import pet from '../../img/pet.png';
import plastic from '../../img/plastic.png';
import recycling from '../../img/recycling.png';
import styrofoam from '../../img/styrofoam.png';

const List = [
  {id: '1', icon: glass, text: '유리', checked: false},
  {id: '2', icon: all, text: '모든종류', checked: true},
  {id: '3', icon: box, text: '종이류', checked: true},
  {id: '4', icon: can, text: '캔', checked: true},
  {id: '5', icon: etc, text: '기타', checked: true},
  {id: '6', icon: pet, text: '플라스틱', checked: true},
  {id: '7', icon: plastic, text: '비닐', checked: true},
  {id: '8', icon: recycling, text: '재활용', checked: true},
  {id: '9', icon: styrofoam, text: '스티로폼', checked: true},
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