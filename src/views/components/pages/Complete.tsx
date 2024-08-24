import Header from '../../ui/Header';
import Button from '../../ui/Button';
import ButtonWrapper from '../../ui/ButtonWrapper';
import CompleteMessage from '../../ui/CompleteMessage';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { getCollectResult } from '../../../apis/collect';
import { useRecoilValue } from 'recoil';
import { userPageIdAtom } from '../../../recoil/atoms/userAtom';
import { TrashType } from '../../../interfaces/trash';

interface Result {
  type: TrashType
  count: number
}

const Complete = () => {
  const navigator = useNavigate()
  const collectId = useRecoilValue(userPageIdAtom)
  const [result, setResult] = useState<Result[]>([])
  const handleMoveToHome = useCallback(() => {
    navigator('/')
    setResult([])
  }, [])

  useEffect(() => {
    fetchResult()
  }, [])

  const fetchResult = useCallback(async() => {
    const result = await getCollectResult(collectId)
    setResult(result?.collectedTrashCounts || [])
  }, [collectId])

  return (
    <>
      <Header />
      <CompleteMessage result={result} />
      <ButtonWrapper>
        <Button title='다른 지역 둘러보기' onClick={handleMoveToHome} />
      </ButtonWrapper>
    </>
  )
}

export default Complete