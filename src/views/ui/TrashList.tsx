import TrashItem from './TrashItem';
import styles from './TrashList.module.scss';
import glass from '../../img/glass.png';
import all from '../../img/all.png';
import paper from '../../img/paper.png';
import can from '../../img/can.png';
import etc from '../../img/etc.png';
import plastic from '../../img/plastic.png';
import plastic_bac from '../../img/plastic_bag.png';
import recycle from '../../img/recycle.png';
import styrofoam from '../../img/styrofoam.png';
import { TrashType } from '../../interfaces/trash';
import { useCallback } from 'react';

const List = [
  {id: TrashType.ALL, icon: all, text: '모든종류', checked: true},
  {id: TrashType.RECYCLE, icon: recycle, text: '재활용', checked: true},
  {id: TrashType.PLASTIC, icon: plastic, text: '플라스틱', checked: true},
  {id: TrashType.PAPER, icon: paper, text: '종이류', checked: true},
  {id: TrashType.PLASTIC_BAG, icon: plastic_bac, text: '비닐', checked: true},
  {id: TrashType.CAN, icon: can, text: '캔', checked: true},
  {id: TrashType.GLASS, icon: glass, text: '유리', checked: false},
  {id: TrashType.STYROFOAM, icon: styrofoam, text: '스티로폼', checked: true},
  {id: TrashType.ETC, icon: etc, text: '기타', checked: true},
]

const TrashList = ({ selectedType, onSelectTrashType, onClickAddTemp }) => {
  const handleChange = useCallback((e, type: TrashType) => {
    onSelectTrashType(e, type)
  }, [])

  const handleClickAdd = () => {
    onClickAddTemp()
  }

  return (
    <div className={styles.wrap}>
      {List.map(({id, icon, text, checked}) => (
        <div className={styles.item} key={id}>
          <TrashItem id={id} icon={icon} text={text} checked={selectedType === id} onChange={handleChange} />
        </div>
      ))}
      <div className={styles.item}>
        <button type='button' className={styles.button} onClick={handleClickAdd}>
          추가
        </button>
      </div>
    </div>
  )
}

export default TrashList