import Button from "../../ui/Button"
import ButtonWrapper from "../../ui/ButtonWrapper"
import Header from "../../ui/Header"
import Map from '../../ui/Map'
import { useCallback, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userIdAtom, userLocationAtom, userPageIdAtom } from '../../../recoil/atoms/userAtom';
import { trashInfoAtom } from '../../../recoil/atoms/trashAtom';
import { sendPostMessage } from '../../../modules/postMessage/postMessageSender';
import { MessageType } from '../../../interfaces/postMessge';
import { useNavigate } from 'react-router-dom';
import { endCollect, getUserPageId } from '../../../apis/collect';

const TrashCollect = () => {
  const navigate = useNavigate()
  const userLocation = useRecoilValue(userLocationAtom)
  const userId = 'dummyuser1' // useRecoilValue(userIdAtom)
  const [userPageId, setUserPageId] = useRecoilState(userPageIdAtom)
  const trashInfos = useRecoilValue(trashInfoAtom)
  const [startCollect, setStartCollect] = useState<boolean>(false);
  const handleStartCollect = useCallback(async () => {
    setStartCollect(true)
    const id = await getUserPageId(userId)
    setUserPageId(id)
    sendPostMessage({ type: MessageType.sendId, payload: { id: id } })
  }, []);

  const handleStopCollect = useCallback(async () => {
    setStartCollect(false)
    await endCollect(userId, userPageId)
    navigate('/complete')
  }, [])

  return (
    <>
      <Header />
      <Map userLocation={userLocation} defaultCenter={userLocation} markers={trashInfos?.list} />
      <ButtonWrapper>
        <Button title={startCollect ? '수집중' : '수집 시작'} onClick={handleStartCollect} disabled={startCollect} />
        <Button type='blue' title='수집 끝내기' onClick={handleStopCollect} disabled={!startCollect} />
    </ButtonWrapper>
    </>
  )
}

export default TrashCollect