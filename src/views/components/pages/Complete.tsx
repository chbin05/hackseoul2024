import Header from '../../ui/Header';
import Button from '../../ui/Button';
import ButtonWrapper from '../../ui/ButtonWrapper';
import Dialog from '../../ui/Dialog';
import CompleteMessage from '../../ui/CompleteMessage';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { getCollectResult } from '../../../apis/collect';
import { useRecoilValue } from 'recoil';
import { userPageIdAtom } from '../../../recoil/atoms/userAtom';
import { TrashType } from '../../../interfaces/trash';
import { TYPE_ICON } from '../../../consts/trash';

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
  }, [])

  useEffect(() => {
    fetchResult()
  }, [])

  const fetchResult = useCallback(async() => {
    const result = await getCollectResult(collectId)
    setResult(result?.collectedTrashCounts || [])
  }, [collectId])

  const handleClose = useCallback(() => {
    setResult([])
  }, [])

  return (
    <>
      <Header />
      <CompleteMessage />
      <ButtonWrapper>
        <Button title='다른 지역 둘러보기' onClick={handleMoveToHome} />
      </ButtonWrapper>
      {result?.length > 0 &&
        <Dialog title='결과' onClose={handleClose}>
          {result.map((item) => {
            return (
              <>
                <img src={TYPE_ICON[item.type].icon} width={30} height={30} alt='' />
                {` ${item.count}개 `}
              </>
            )
          })}
          수거를 완료하였습니다!
        </Dialog>}
    </>
  )
}

export default Complete