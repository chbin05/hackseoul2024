import Button from "../../ui/Button"
import ButtonWrapper from "../../ui/ButtonWrapper"
import Header from "../../ui/Header"
import Map from '../../ui/Map'
import TrashList from "../../ui/TrashList"

const TrashEdit = () => {
  return (
    <>
      <Header />
      <Map type='report' />
      <TrashList />
      <ButtonWrapper>
        <Button title='쓰레기 등록' onClick={()=>{}} />
      </ButtonWrapper>
    </>
  )
}

export default TrashEdit