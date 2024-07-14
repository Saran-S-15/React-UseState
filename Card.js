import React from 'react'

function Card({data,updateCart,cart}) {
    const passDataTOParent = () =>{
        updateCart(data)
    }
  return (
    <div className='col-lg-3 mb-3'>
        <div className="card">
            <img 
            src="https://picsum.photos/200/120" 
            className="card-img-top" 
            alt="..."
            />
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <h3>${data.price}</h3>
                <button disabled={cart.some(obj => obj.id === data.id)} onClick={passDataTOParent} className="btn btn-primary">
                    Add to Cart
                </button>
              </div>
          </div>
    </div>
  )
}

export default Card;