import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Card from './Card';

function App() {
  const products = [
    {
      id: 1,
      title: "a",
      price: 10,
      description: "A",
      category: 'aA',
      rating: { rate: 2.9, count: 100 }
    },
    {
      id: 2,
      title: "b",
      price: 20,
      description: "B",
      category: 'bB',
      rating: { rate: 3.0, count: 110 }
    },
    {
      id: 3,
      title: "c",
      price: 30,
      description: "C",
      category: 'cC',
      rating: { rate: 3.1, count: 120 }
    },
    {
      id: 4,
      title: "d",
      price: 40,
      description: "D",
      category: 'dD',
      rating: { rate: 3.2, count: 130 }
    },
    {
      id: 5,
      title: "e",
      price: 50,
      description: "E",
      category: 'eE',
      rating: { rate: 3.3, count: 140 }
    },
    {
      id: 6,
      title: "f",
      price: 60,
      description: "F",
      category: 'fF',
      rating: { rate: 3.4, count: 150 }
    },
    {
      id: 7,
      title: "g",
      price: 70,
      description: "G",
      category: 'gG',
      rating: { rate: 3.5, count: 160 }
    },
    {
      id: 8,
      title: "h",
      price: 80,
      description: "H",
      category: 'hH',
      rating: { rate: 3.6, count: 170 }
    },
    {
      id: 9,
      title: "i",
      price: 90,
      description: "I",
      category: 'iI',
      rating: { rate: 3.7, count: 180 }
    },
    {
      id: 10,
      title: "j",
      price: 100,
      description: "J",
      category: 'jJ',
      rating: { rate: 3.8, count: 190 }
    },
    {
      id: 11,
      title: "k",
      price: 110,
      description: "K",
      category: 'kK',
      rating: { rate: 3.9, count: 200 }
    },
    {
      id: 12,
      title: "l",
      price: 120,
      description: "L",
      category: 'lL',
      rating: { rate: 4.0, count: 210 }
    },
    {
      id: 13,
      title: "m",
      price: 130,
      description: "M",
      category: 'mM',
      rating: { rate: 4.1, count: 220 }
    },
    {
      id: 14,
      title: "n",
      price: 140,
      description: "N",
      category: 'nN',
      rating: { rate: 4.2, count: 230 }
    },
    {
      id: 15,
      title: "o",
      price: 150,
      description: "O",
      category: 'oO',
      rating: { rate: 4.3, count: 240 }
    },
    {
      id: 16,
      title: "p",
      price: 160,
      description: "P",
      category: 'pP',
      rating: { rate: 4.4, count: 250 }
    },
    {
      id: 17,
      title: "q",
      price: 170,
      description: "Q",
      category: 'qQ',
      rating: { rate: 4.5, count: 260 }
    },
    {
      id: 18,
      title: "r",
      price: 180,
      description: "R",
      category: 'rR',
      rating: { rate: 4.6, count: 270 }
    },
    {
      id: 19,
      title: "s",
      price: 190,
      description: "S",
      category: 'sS',
      rating: { rate: 4.7, count: 280 }
    },
    {
      id: 20,
      title: "t",
      price: 200,
      description: "T",
      category: 'tT',
      rating: { rate: 4.8, count: 290 }
    }
  ];
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const updateCart = (item) =>{
    setCart([...cart,item])
    setTotal(total + item.price)
  }

  const removeCart = (item) =>{
    const itemIndex = cart.findIndex(obj => obj.id === item.id)
    cart.splice(itemIndex,1)
    setCart([...cart])
    setTotal(total - item.price)
  }
  
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-9 mt-3'>
          <div className='row'>
            {
              products.map((product) => {
                return <Card data={product} updateCart={updateCart} cart={cart}></Card>
              })
            }
          </div>
        </div>
        <div className='col-lg-3 mt-3'>
          <h1>Cart</h1>
          <ol class="list-group list-group-numbered">
            {
              cart.map((item) => {
                return <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">{item.title}</div>
                    {item.description}
                  </div>
                  <button onClick={()=> removeCart(item)} class="badge text-bg-primary rounded-pill">X</button>
                </li>
              })
            }
          </ol>
          <h2>Total: {total}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
