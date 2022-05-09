import React from 'react'
import { useParams ,useNavigate} from 'react-router-dom'

export default function Fullcard({data}) {
    const navigate = useNavigate();
    const{title}=useParams()

  return (
  <section className='full'>
        <div className='container'>
            {data.filter(card =>card.title ===title).map((card,index)=>(
                <div className='fullcard'key={index}>
                   <h1>{card.title}</h1>
                   <p>{card.description}</p>
                   <button onClick={()=>{navigate("/");}}>BACK HOME PAGE</button>
        </div>
            ))}
        </div>
  </section>
  )
}
//