import cifrao2 from '../../assets/cifrao.png'
import { HeaderProps } from '../../interface/HeaderProps'

import { Container, Content } from './styles'

export function Header({ onOpenNewTransactionModal }: HeaderProps){


  return(
    <Container>
      <Content>
        <section>
      <div>
        <img src={cifrao2} width={50} alt="DBmoney"/>
        <h1>DMoney</h1>
      </div>
      <button type="button" onClick={onOpenNewTransactionModal}>
        Nova Transação
      </button>
      </section>
      </Content>
    </Container>
  )
}