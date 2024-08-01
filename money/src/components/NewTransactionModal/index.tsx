import Modal from "react-modal";
import { newTransactionModalProps } from "../../interface/NewTransactionModalProps";
import { Container, TransationTypeContainer, RadioBox } from "./styles";
import { FormEvent, useState} from "react";
import { useTransactions } from "../../Hooks/useTransactions";

import entrada from '../../assets/entrada.png'
import saida from '../../assets/saida.png'
import Close from '../../assets/close.png'



export function NewTransactionModal({ isOpen, onRequestClose }: newTransactionModalProps) {
  const { createTransaction} = useTransactions()

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

 async function handleNewCreateTransaction(event: FormEvent){
    event.preventDefault()

   await createTransaction({
      title,
      amount,
      category,
      type,
    })

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')
    onRequestClose()
  }

  return (
    <Modal isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
      >

        <button
         type="button" 
         onClick={onRequestClose} 
         className="react-modal-close"
         >
          <img src={Close} alt="close Modal" width={20} />
        </button>

      <Container onSubmit={handleNewCreateTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={e=> setAmount(Number(e.target.value))}
        />

        <TransationTypeContainer>
          <RadioBox
          type="button"
          onClick={()=>{setType('deposit')}}
          $isActive={type === 'deposit'}
          $activeColor= 'green'
          >
            <img src={entrada} alt="entrada" width={30} height={30}/>
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
          type="button"
          onClick={()=>{setType('withdraw')}}
          $isActive={type === 'withdraw'}
          $activeColor= 'red'
          >
            <img src={saida} alt="saida" width={30} height={30} />
            <span>Saida</span>
          </RadioBox>
        </TransationTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={e=>setCategory(e.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>

    </Modal>
  )
}