import Button from "../../ui/Button"
import ButtonWrapper from "../../ui/ButtonWrapper"
import Header from "../../ui/Header"
import Map from '../../ui/Map'

const TrashCollect = () => {
  return (
    <>
      <Header />
      <Map />
      <ButtonWrapper>
        <Button title='수집 시작' onClick={()=>{}} />
        <Button type='blue' title='수집 끝내기' onClick={()=>{}} />      
    </ButtonWrapper>
    </>
  )
}

export default TrashCollect