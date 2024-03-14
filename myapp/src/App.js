import product from './script.js'
import Home from './pages/Home.js';
import Header from './layouts/Header.js';



const App = () => {
  return (
   <>
     <div className='container'>
      <Header/>
      <Home product = {product} />
      </div>

    </>
  )
}
export default App; 















 {/* диструктиризация массива*/}
//   let arr=[{name:"sasha"},{age:20}, {city:20}]
// let [a,b,c]=arr
// console.log(a);
{/* диструктиризация объекта*/}
// const obj = {
//   name:"sasha",
//   age:20,
//   city:20
// }
// let {name,age,city} = obj
// console.log(name);
{/* диструктиризация параметров функции*/}
// const getObj = ({name}) => {
// console.log(name);
// }
// getObj({name:"Sasha"})


// {/* <div className='container'>
//     <div className='wrapper'>
// {shop.map((el)=>(
//   <div className='cards'>
//     <div className='img'>
//     <img src={el.image} alt={el.cotegory}/>
//   </div>
//   <p className='name'>
// {el.name}
//   </p>
//   <p className='price'>
// {el.price}$
//   </p>
//   </div>
// ))}
//     </div>
//     </div> */}


 