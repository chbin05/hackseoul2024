import TrashItem from './TrashItem'
import styles from './TrashList.module.scss'

const List = [
  {id: '1', icon: 'icon', checked: false},
  {id: '2', icon: 'icon', checked: true},
  {id: '3', icon: 'icon', checked: true},
  {id: '4', icon: 'icon', checked: true},
  {id: '5', icon: 'icon', checked: true},
  {id: '6', icon: 'icon', checked: true},
  {id: '7', icon: 'icon', checked: true},
]

const TrashList = () => {
  return (
    <ul className={styles.wrap}>
      {List.map(({id, icon, checked}) => (
        <li className={styles.item} key={id}>
          <TrashItem id={id} icon={icon} checked={checked} />
        </li>
      ))}
    </ul>
  )
}

export default TrashList