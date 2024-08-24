import Button from "../../ui/Button"
import ButtonWrapper from "../../ui/ButtonWrapper"
import Header from "../../ui/Header"
import Map from '../../ui/Map'
import TrashAddedList from "../../ui/TrashAddedList"
import TrashList from "../../ui/TrashList"
import { useCallback, useState } from 'react';
import useEditService from '../../../services/edit';
import { TrashType } from '../../../interfaces/trash';
import { useRecoilValue } from 'recoil';
import { userLocationAtom } from '../../../recoil/atoms/userAtom';
import { MapLocation } from '../../../interfaces/map';

const TrashEdit = () => {
  const editService = useEditService()
  const userLocation = useRecoilValue(userLocationAtom)
  const [tempLocation, setTempLocation] = useState<MapLocation>(null)

  const handleAdd = useCallback(async () => {
    const trashInfo = {
      type: TrashType.PLASTIC,
      location: userLocation || tempLocation
    }
    await editService.addTrashInfo(trashInfo)
  }, [userLocation, tempLocation, editService])

  const handleSetTempData = useCallback((e) => {
    setTempLocation({
      lat: e.detail.latLng?.lat,
      lng: e.detail.latLng?.lng
    })
  }, [])

  return (
    <>
      <Header />
      <Map type='report' onClickMap={handleSetTempData} selectedLocation={tempLocation} />
      <TrashList />
      <TrashAddedList />
      <ButtonWrapper>
        <Button title='쓰레기 등록' onClick={handleAdd} />
      </ButtonWrapper>
    </>
  )
}

export default TrashEdit