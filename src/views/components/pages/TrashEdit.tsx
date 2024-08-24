import Button from '../../ui/Button';
import ButtonWrapper from '../../ui/ButtonWrapper';
import Header from '../../ui/Header';
import Map from '../../ui/Map';
import TrashAddedList from '../../ui/TrashAddedList';
import TrashList from '../../ui/TrashList';
import { useCallback, useState } from 'react';
import useEditService from '../../../services/edit';
import { Trash, TrashType } from '../../../interfaces/trash';
import { useRecoilValue } from 'recoil';
import { userLocationAtom } from '../../../recoil/atoms/userAtom';
import { MapLocation } from '../../../interfaces/map';
import { useNavigate } from 'react-router-dom';

const TrashEdit = () => {
  const navigator = useNavigate()
  const editService = useEditService()
  const userLocation = useRecoilValue(userLocationAtom)
  const [tempType, setTempType] = useState<TrashType>(TrashType.ALL)
  const [tempLocation, setTempLocation] = useState<MapLocation>(null)
  const [tempTrashInfos, setTempTrashInfos] = useState<Trash[]>([])

  const handleAdd = useCallback(async () => {
    // const trashInfo = {
    //   type: TrashType.PLASTIC,
    //   location: userLocation || tempLocation
    // }
    await editService.addTrashInfo(tempTrashInfos)
    navigator('/')
  }, [userLocation, tempLocation, editService])

  const handleSetTempData = useCallback((e) => {
    setTempLocation({
      lat: e.detail.latLng?.lat,
      lng: e.detail.latLng?.lng
    })
  }, [])

  const handleSelectTrashType = useCallback((e, type: TrashType) => {
    setTempType(type)
  }, [])

  const handleAddTemp = useCallback(() => {
    if (!tempLocation && !userLocation) {
      alert('위치를 선택해주세요.')
      return
    }

    setTempTrashInfos( [
      ...tempTrashInfos,
      {
        type: tempType,
        location: tempLocation
      }
    ])
  }, [tempType, tempLocation, userLocation])

  return (
    <>
      <Header />
      <Map type='report' onClickMap={handleSetTempData} selectedLocation={tempLocation} />
      <TrashList selectedType={tempType} onSelectTrashType={handleSelectTrashType} onClickAddTemp={handleAddTemp}/>
      <TrashAddedList addedList={tempTrashInfos}/>
      <ButtonWrapper>
        <Button title='쓰레기 등록' onClick={handleAdd} />
      </ButtonWrapper>
    </>
  )
}

export default TrashEdit