import Button from "../../ui/Button"
import ButtonWrapper from "../../ui/ButtonWrapper"
import Header from "../../ui/Header"
import Map from '../../ui/Map'
import { useCallback, useState } from 'react';

const TrashCollect = () => {
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
      <Map />
      <ButtonWrapper>
        <Button title={startCollect ? '수집중' : '수집 시작'} onClick={handleStartCollect} disabled={startCollect} />
        <Button type='blue' title='수집 끝내기' onClick={handleStopCollect} />
    </ButtonWrapper>
    </>
  )
}

export default TrashCollect