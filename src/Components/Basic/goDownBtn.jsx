import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function GoDownBtn({addClasses, goTo}) {
    return (
        <a href={goTo} className={addClasses}>
            <ArrowDropDownIcon className='text-4xl' fontSize='large' />
        </a>
    );
}

export default GoDownBtn;