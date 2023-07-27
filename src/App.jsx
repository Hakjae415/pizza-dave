import Header from './Header'
import pizzas from '../mockDB'

function App() {
  console.log(pizzas)
  return (
    <>
      <Header/>
      <h1>Pizza Dave</h1>
      {
        pizzas.map((pizza) => {
          return (
            <>
              <h3 key={pizza.id}>{pizza.name}</h3>
              <p>Made By Jon</p>
              {
                pizza.toppings.map((topping) => {
                  return <li key={topping}>{topping}</li>
                })
              }
            </>
          )
        })
      }
    </>
  )
}

export default App
