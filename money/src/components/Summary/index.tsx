import entrada from '../../assets/entrada.png'
import saida from '../../assets/saida.png'
import total from '../../assets/total.png'


import { Container } from "./styles";
import { useTransactions } from '../../Hooks/useTransactions';

export function Summary(){
  const {transactions} = useTransactions()

const summary = transactions.reduce((acc, transaction)=> {
  if( transaction.type === 'deposit'){
    acc.deposits += transaction.amount
    acc.total += transaction.amount
  } else{
    acc.withdraws += transaction.amount
    acc.total -= transaction.amount
  } return acc
}, {
  deposits: 0,
  withdraws: 0,
  total: 0,
})


  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entrada} alt="Entrada" width={70} />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={saida} alt="Entrada" width={50} />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.withdraws)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="Entrada" width={50} />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}