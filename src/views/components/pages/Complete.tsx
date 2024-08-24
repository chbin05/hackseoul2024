import Header from '../../ui/Header'
import Button from "../../ui/Button"
import ButtonWrapper from "../../ui/ButtonWrapper"
import Dialog from '../../ui/Dialog'
import CompleteMessage from '../../ui/CompleteMessage'

const Complete = () => {
  const isShowDialog = false;

  return (
    <>
      <Header />
      <CompleteMessage />
      <ButtonWrapper>
        <Button title='다른 지역 둘러보기' onClick={()=>{}} />
      </ButtonWrapper>

      {/* TODO: Dialog 필요 시 사용해주세요 */}
      {isShowDialog && <Dialog title='title' message={'message'} />}
    </>
  )
}

export default Complete