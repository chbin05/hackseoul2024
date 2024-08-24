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
import { ArrayUtils } from '../../../utils/arrayUtils';
import Dialog from '../../ui/Dialog';

const TrashEdit = () => {
  const navigator = useNavigate()
  const editService = useEditService()
  const userLocation = useRecoilValue(userLocationAtom)
  const [tempType, setTempType] = useState<TrashType>(TrashType.ALL)
  const [tempLocation, setTempLocation] = useState<MapLocation>(null)
  const [tempTrashInfos, setTempTrashInfos] = useState<Trash[]>([])
  const [warnMessage, setWarnMessage] = useState<string>(null)

  const handleAdd = useCallback(async () => {
    if (tempTrashInfos.length === 0) {
      setWarnMessage('추가버튼으로 등록할 아이템을 추가해주세요!')
      return
    }

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
      setWarnMessage('위치를 선택해주세요.')
      return
    }

    setTempTrashInfos( [
      ...tempTrashInfos,
      {
        type: tempType,
        location: tempLocation || userLocation
      }
    ])
  }, [tempType, tempLocation, userLocation])

  const handleDeleteTemp = useCallback((e, index) => {
    const newTempInfos = ArrayUtils.removeByIndex([...tempTrashInfos], index)
    setTempTrashInfos(newTempInfos)
  }, [tempTrashInfos])

  const handleCloseDialog = useCallback(() => {
    setWarnMessage(null)
  }, [])

  return (
    <>
      <Header />
      <Map
        type='report'
        markers={tempTrashInfos}
        onClickMap={handleSetTempData}
        defaultCenter={userLocation}
        userLocation={userLocation}
        selectedLocation={tempLocation}
      />
      <TrashList selectedType={tempType} onSelectTrashType={handleSelectTrashType} onClickAddTemp={handleAddTemp}/>
      <TrashAddedList addedList={tempTrashInfos} onDeleteTemp={handleDeleteTemp}/>
      <ButtonWrapper>
        <Button title='쓰레기 등록' onClick={handleAdd} />
      </ButtonWrapper>
      {warnMessage && <Dialog title='안내' message={warnMessage} onClose={handleCloseDialog} />}
    </>
  )
}

export default TrashEdit