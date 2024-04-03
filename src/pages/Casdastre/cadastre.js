import {Header} from '../../components/Header/header'
import {Container} from '../../components/Container/container'
import {Footer} from '../../components/Footer/footer'
import {Form} from '../../components/Form/form'
export function Cadastre(){
  return(
    <>
      <Header/>
      <Container>
        <Form />
      </Container>
      <Footer/>
    </>
  )
}