import Card from "../components/Card"

const Home = ({product}) => {
    return (
<>
<div className='wrapper'>
           {product.map((el) => (
            <Card p = {el}/>
          ))}

        </div>
</>
    )
}

export default Home