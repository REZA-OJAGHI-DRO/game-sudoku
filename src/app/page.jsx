'use client'
import { useEffect, useRef, useState } from 'react';
import './globals.css'

export default function Home() {
 const[row1,setRow1]=useState()
const box=useRef()
const p=useRef()
const p2=useRef()
  


function start(e){
  if(e.target.getAttribute('data-status')=='off'){
    p.current.style.display='none'
    p2.current.style.display='flex'
    const row11 =[]
  while (row11.length<9) {
 const col=Math.floor(Math.random()*9)+1
if(!row11.includes(col)){
  row11.push(col)
}
}
   const sudoku=[
    row11[0],row11[1],row11[2],row11[3],row11[4],row11[5],row11[6],row11[7],row11[8],
    row11[5],row11[3],row11[8],row11[0],row11[6],row11[7],row11[2],row11[1],row11[4],
    row11[6],row11[4],row11[7],row11[1],row11[2],row11[8],row11[5],row11[0],row11[3],
    row11[3],row11[6],row11[5],row11[2],row11[8],row11[1],row11[7],row11[4],row11[0],
    row11[2],row11[7],row11[1],row11[4],row11[3],row11[0],row11[8],row11[6],row11[5],
    row11[8],row11[0],row11[4],row11[5],row11[7],row11[6],row11[3],row11[2],row11[1],
    row11[7],row11[8],row11[3],row11[6],row11[1],row11[4],row11[0],row11[5],row11[2],
    row11[4],row11[2],row11[0],row11[7],row11[5],row11[3],row11[1],row11[8],row11[6],
    row11[1],row11[5],row11[6],row11[8],row11[0],row11[2],row11[4],row11[3],row11[7]
  ]
  setRow1(sudoku)
  const x=[]
  while(x.length<41){
    const x1=Math.floor(Math.random()*81)
    if(!x.includes(x1)){
      x.push(x1)

    }
  }
  console.log(x);
  console.log(sudoku);
setTimeout(()=>{
  x.map((val)=>{
      box.current.children[val].value=sudoku[val]
      box.current.children[val].setAttribute('readonly','true')
  })
},1)

    e.target.setAttribute('data-status','on')
  }else{
    p.current.style.display='flex'
    p2.current.style.display='none'
    setRow1([])
    e.target.setAttribute('data-status','off')
  }
  }

function inp(e,x){
  if(box.current.children[x].getAttribute('data-status')==e.target.value){
    box.current.children[x].style.color='green'
  }else{
    box.current.children[x].style.color='red'
  }
}

  return (
    <main className="w-[100%] h-[100vh] bg1">
   

     <section className='w-[100%] h-[80vh] flex justify-center items-center'>
      <div className='w-[360px] h-[360px] relative overflow-hidden bx rounded-xl border-2 border-black'>
      <div  ref={p2} style={{display:'none'}} className='w-[360px] h-[360px] absolute flex flex-wrap bg-[rgba(255,255,255,.3)]'>
        <div className='w-[33.333%] h-[33.333%] border-2 border-black'></div>
        <div className='w-[33.333%] h-[33.333%] border-2 border-black'></div>
        <div className='w-[33.333%] h-[33.333%] border-2 border-black'></div>
        <div className='w-[33.333%] h-[33.333%] border-2 border-black'></div>
        <div className='w-[33.333%] h-[33.333%] border-2 border-black'></div>
        <div className='w-[33.333%] h-[33.333%] border-2 border-black'></div>
        <div className='w-[33.333%] h-[33.333%] border-2 border-black'></div>
        <div className='w-[33.333%] h-[33.333%] border-2 border-black'></div>
        <div className='w-[33.333%] h-[33.333%] border-2 border-black'></div>
      </div>
      <article ref={box} className='w-[360px] h-[360px] absolute flex flex-wrap'>
        {row1&&row1.map((val,i)=>{
          return(
            <>
            <input key={i} type="text" maxLength='1' data-status={val} onChange={()=>inp(event,i)} className='bg-[rgba(255,255,255,0)] forced-colors:bg-[rgba(255,255,255,0)] w-[40px] h-[40px] text-center border border-black flex justify-center items-center text-[1.5rem] font-bold font-sans' />
            </>
          )
        })}
        
      </article>
        <p ref={p} style={{display:'flex'}} className='bg-[rgba(255,255,255,.3)] w-[360px] h-[360px] absolute uppercase flex justify-center items-center text-[4rem]'>sudoku</p>
     </div>
     </section>
     <section className='w-[100%] h-[20vh] flex justify-center items-start'>
      <button onClick={()=>start(event)} data-status='off' className='w-[8rem] h-[3rem] flex justify-center items-center uppercase font-bold font-sans text-[1.5rem] bg-[rgba(255,255,255,.3)] rounded-lg bx'>start</button>
     </section>
  

    </main>
  );
}
