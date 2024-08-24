import Map from '../../ui/Map'
import Header from '../../ui/Header'
import ButtonWrapper from '../../ui/ButtonWrapper'
import Button from '../../ui/Button'


const Home = () => {
  return (
    <>
      <Header />
      <Map />
      <ButtonWrapper>
        <Button title='쓰레기 발견' onClick={()=>{}} />
        <Button type='blue' title='쓰레기 정리 시작' onClick={()=>{}} />      
    </ButtonWrapper>
    </>
  )
}

export default Home