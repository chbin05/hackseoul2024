import { TrashType } from '../interfaces/trash';
import all from '../img/all.png';
import recycle from '../img/recycle.png';
import plastic from '../img/plastic.png';
import paper from '../img/paper.png';
import plastic_bag from '../img/plastic_bag.png';
import can from '../img/can.png';
import glass from '../img/glass.png';
import styrofoam from '../img/styrofoam.png';
import etc from '../img/etc.png';

export const TYPE_ICON = {
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