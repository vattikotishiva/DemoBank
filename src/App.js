import logo from './logo.svg';
import './App.css';
import { useMemo, useState} from 'react';
import Form from'./Form'
import Account  from './account';
import  './store'

function App(){
    return <>
        <Form/>

    <Account/>
    </>
}










// function App(){
//     let [time,updatedtime] = useState(new Date().toLocaleTimeString())

//     const [products,setProducts] = useState(
//         {
//             "id": 1,
//             "title": "Change title",
//             "price": 100
//         },
//         {
//             "id": 2,
//             "title": "Change title",
//             "price": 100
//         },
//         {
//             "id": 3,
//             "title": "Change title",
//             "price": 100
//         }
//     )
// const [searchText,updateSearchText] = useState("")

// const filterproducts = useMemo(

//     ()=>{
//         return products.filter(
//             (p)=>{
//                 return p.name.toLowercase().includes(searchText)
//             }
//         )
//     },[products,searchText]
// )
//     return (
//         <div>
//             <table>
//             <tr>
//                 <td>SL nO</td>
//                 <td>Name</td>
//                 <td>Price</td>
//             </tr>
//             {
//                 filterproducts.map(
//                     p => (
//                         <tr>
//                             <td>{p.id}</td>
//                             <td>{p.name}</td>
//                         </tr>
//                     )
//                 )
//             }
//             </table>
//         </div>
//     )
// }




// import Home , {Subhome} from "./home"
// import About from "./about"
// import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';

// function Header(){
//     return(
//         <div>
//             <ui>
//                 <li>
//                 <Link to="/home">HOME</Link>
//                 </li>
//                 <li>
//                 <Link to="/about">about</Link>
//                 </li>
//             </ui>
//         </div>
//     )
// }

// function App(){
//     return(
//         <>
        
//         <BrowserRouter>
//         <Header/>
//         <Routes>
//             <Route path="home" element={<Home/>}>
//                 <Route path='subhome' element={<Subhome/>}/>
//             </Route>
//             <Route path='about' element={<About/>} />
//         </Routes>
//         </BrowserRouter>
//         </>
//     )
// }























// fectthing data 
// function App(){
  
 
//   let [input , updateInput] = useState([])

//   useEffect(
//     ()=>{getProducts()},[]
//   )

//   async function getProducts(){
    
//     let res = await fetch('https://fakestoreapi.com/products');
//     let productsList = await res.json()
//     console.log(productsList)
//     updateInput(productsList)
//   }


//   if(input.length == 0){
//     return (<h1>fechting data</h1>)
//   }
//   return ( 
//     input.map((p)=> <Cart {...p}></Cart>)
    
//   )
// }




// TODO LIST TASK
// let task
// function App(){
// let [todoInput , updateInput] = useState(task)
// let [todo , updatetodo] = useState(
//   [
//   {
//     id:1,
//     task:'hiii bro!!!'
//   },
//   {
//     id:2,
//     task:'higii bro!!!'
//   }
// ]
// )
// function deleteUpdate(id){

//   // let updateDelete = todo.filter(  
//   //    (todo)=>{
//   //      return todo.id !== id;
//   //    }
//   //  )
//   //   updatetodo(updateDelete)
//  }
 
// let nextID = 3
// function addNewTool(){
//   if(todoInput=== ""){
//     alert('please enter the task')
//   }
//   else{
//      let newTodos =[
//       ...todo,
//       {
//         id:nextID++,
//         task:todoInput
//       }
//     ]
//     updatetodo(newTodos)
//   }
// }

//   return(
//     <div className='container mt-5 w-50'>
//       <div className='input-group'>
//         <input className='form-control' onChange={
//           (e)=>{ 
//             let task = e.target.value
//             updateInput(task)
//         }} type='text' value={todoInput}/>
//         <button className='btn btn-primary' onClick={
//           ()=>{addNewTool()}
//         }>Add</button>
//       </div>
//       <div>
//         <ul className='list-group mt-1'>
//           {
//           todo.map(
//             (u)=>{
//               return(
//                 <li className='list-group-item'>
//             <p>{u.task}</p>
//             <button className='btn' onClick={
//               deleteUpdate(u.id)
//             }>❌</button>
//           </li>
//               )
//             }
//           )
// }
          
        

//         </ul>

//       </div>
//     </div>
//   )

  
// }


// function App() {
//   let stock = 10;
//   let [counter , updateCounter] = useState(0)
//   return (
//     <div className="App">
//      <button className='minus'  disabled={counter === 0} 
//      onClick={
//       ()=>{
//         if(counter > 0){
//           updateCounter(counter-1)
//         }
//       }
//      }>-</button>
//      <p>{counter}</p>
//      <button className="plus" disabled={counter === stock} 
//      onClick={
//       ()=>{
//         if(counter<stock){
//           updateCounter(counter+1)
//         }
//       }
//      }>+</button>
//     </div>
//   );
// }

export default App;
