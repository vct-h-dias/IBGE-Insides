import UnderlineTx from "../Basic/UnderlineTx";

function Card({title, description, image, goTo}) {
  return (
    <a href={goTo}>
        <div className='w-96 min-h-[40rem] border-[1px] hover:scale-105 duration-75 shadow-md hover:shadow-xl rounded-sm'>
        <div className='p-10'>
            <img src={image} alt={title} />
        </div>
        <div className='border-slate-200 border-t-[1px] pl-5 pt-3'>
            <h1 className='text-xl'><UnderlineTx text={title}></UnderlineTx></h1>
        </div>
        <div className='p-5'>
            <h1>{description}</h1>
        </div>
    </div>
    </a>
  );
}

export default Card;