import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model} from 'miragejs'
import { App } from './App.tsx'

createServer({

  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id:1,
          title: 'freelancer',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2024-07-31 10:00:00')
        },
        {
          id:2,
          title: 'aluguel',
          type: 'withdraw',
          category: 'casa',
          amount: 1000,
          createdAt: new Date('2024-07-31 15:00:00')
        }
      ]
    })

  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions',() => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) =>{
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
