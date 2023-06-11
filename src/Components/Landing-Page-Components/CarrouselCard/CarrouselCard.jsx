const CarrouselCard = ({ title, text, imageURL}) => {
    return(
        <>
            <div className='card w-[70rem] h-[36rem] flex gap-10 px-10 border-2 border-black'>
                <div className='w-9/12 py-7 border-2 border-black'>
                    <h1 className='text-2xl font-medium mb-4'><span className='border-b-2 border-slate-800'>{title}</span></h1>
                    <p className='font-light'>{text}</p>
                </div>
                <div className='inline-flex border-2 border-black'>
                    <img src={imageURL} alt="CarrouselCardRepresentation" className='m-auto'/>
                </div>
            </div> 
        </>
    )
}

export default CarrouselCard
