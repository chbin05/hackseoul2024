import Button from "../../ui/Button"
import ButtonWrapper from "../../ui/ButtonWrapper"
import Header from "../../ui/Header"
import Map from '../../ui/Map'
import { useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userLocationAtom } from '../../../recoil/atoms/userAtom';
import { trashInfoAtom } from '../../../recoil/atoms/trashAtom';

const TrashCollect = () => {
  const userLocation = useRecoilValue(userLocationAtom)
  const trashInfos = useRecoilValue(trashInfoAtom)
  const [startCollect, setStartCollect] = useState<boolean>(false);
  const handleStartCollect = useCallback(() => {
    setStartCollect(true)
  }, []);

  const handleStopCollect = useCallback(() => {
    setStartCollect(false)
  }, [])

  return (
    <>
      <Header />
      <Map userLocation={userLocation} defaultCenter={userLocation} markers={trashInfos?.list} />
      <ButtonWrapper>
        <Button title={startCollect ? '수집중' : '수집 시작'} onClick={handleStartCollect} disabled={startCollect} />
        <Button type='blue' title='수집 끝내기' onClick={handleStopCollect} />
    </ButtonWrapper>
    </>
  )
}

export default TrashCollect