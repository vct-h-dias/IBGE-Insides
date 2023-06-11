const ProfileCard = ({imgIcon, profileName, cFunction, gLink}) => {
    return(
        <div className='p-4 rounded-2xl text-gray-700 hover:text-slate-950 duration-200 group'>
            <a href={gLink} target="_blank" title='GitHub'>
                <div className='mb-2'>
                    <img src={imgIcon} alt={profileName} className='w-56 rounded-full border-gray-500 border-2 group-hover:border-slate-950 duration-200'/>
                </div>
                <div className='text-center'>
                    <div className='text-2xl font-medium'>
                        <h1>{profileName}</h1>
                    </div>
                    <div className='text-1xl font-light'>
                        <h1>{cFunction}</h1>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ProfileCard
