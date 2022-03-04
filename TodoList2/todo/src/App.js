import React, { useState } from "react";
import './App.css';

const INITIAL_STATE=[
  {id:1 ,baslik:"Alisveris yap",tamalandi:false},
  {id:2,baslik:"Fatura ode",tamamlandi:true}
]



function App() {
   
  const [Liste,setListe]=useState(INITIAL_STATE)
  const [newitem,setnewitem]=useState("")

  function additem (){
    setListe([...Liste,{id:Date.now(),baslik:newitem,tamamlandi:false}])
    setnewitem("")
  }

 function Markcompleted(id){
  setListe(Liste.map(el =>el.id===id ?{...el,tamamlandi: !el.tamamlandi}:el))
 }

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
          <div className="ekleme_formu">
              <input value={newitem} onChange={(e)=> setnewitem(e.target.value)} placeholder="listeye ekle" />
              <button onClick={additem}>Ekle</button>
          </div>
          <div className="liste" >
         {Liste.map((item,index)=> 
           <div key={index} onClick={()=>Markcompleted(item.id)}
           className={item.tamamlandi ? "yapildi" : " "}>{item.baslik}</div>
           
         )}
           
          </div>
            
         
          <button onClick={() => setListe(Liste.filter(list => !list.tamamlandi))} className="temizle">Tamamlananlari Temizle</button>
    </div>
  );
}

export default App;
