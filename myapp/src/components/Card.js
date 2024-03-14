
const Card = ({p}) => {
    return (
        <>
            <div className='cards'>
                <p className='cards__index'>
                    {p.index}
                </p>
                <div className='cards__img'>
                    <img src={p.image} alt={p.category} />
                </div>
                <h3 className='cards__title'>
                    {p.title}
                </h3>
                <p className='cards__desc'>
                    {p.description}
                </p>
                <p className='cards__price'>
                    {p.price}$
                </p>
            </div>
        </>
    )
}

export default Card