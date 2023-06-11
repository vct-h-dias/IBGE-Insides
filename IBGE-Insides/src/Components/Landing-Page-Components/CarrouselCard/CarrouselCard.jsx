const CarrouselCard = ({ title, text, imageURL}) => {
    return(
        <>
            <div className='card w-[70rem] pb-10 pt-14 px-24 flex items-start'>
                <div className='w-9/12 pr-16'>
                    <h1 className='text-2xl font-medium mb-4'><span className='border-b-2 border-slate-800'>{title}</span></h1>
                    <p className='font-light'>{text}</p>
                </div>
                <div className='inline-flex'>
                    <img src={imageURL} alt="CarrouselCardRepresentation" className='m-auto'/>
                </div>
            </div> 
        </>
    )
}

export default CarrouselCard
