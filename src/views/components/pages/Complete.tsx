import Header from '../../ui/Header'
import Button from "../../ui/Button"
import ButtonWrapper from "../../ui/ButtonWrapper"
import Dialog from '../../ui/Dialog'
import CompleteMessage from '../../ui/CompleteMessage'
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const Complete = () => {
  const navigator = useNavigate()
  const isShowDialog = false;
  const handleMoveToHome = useCallback(() => {
    navigator('/')
  }, [])

  return (
    <>
      <Header />
      <CompleteMessage />
      <ButtonWrapper>
        <Button title='다른 지역 둘러보기' onClick={handleMoveToHome} />
      </ButtonWrapper>

      {/* TODO: Dialog 필요 시 사용해주세요 */}
      {isShowDialog && <Dialog title='title' message={'message'} onClose={() => {}} />}
    </>
  )
}

export default Complete