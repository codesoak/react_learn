import { useState } from 'react'
import Input from '../input';

const SearchSelect = () => {
    const [open, setOpen] = useState(false)
    const [text, setText] = useState('')
    const allCourses = ['Javascript', 'HTML', 'CSS', 'React']
    const [courses, setCourses] = useState(allCourses)

    const handleSelection = (option) => {
        setText(option)
        setOpen(false)
    }

    const inputChange = (e) => {
        setText(e.target.value)
        setOpen(true)
        setCourses(allCourses.filter(course => course.includes(e.target.value)))
    }

    return (
        <div>
            <Input value={text} onChange={inputChange} placeholder={'Select Course'}/>
            <div className={`options ${open ? 'open' : ''}`}>
                {courses.length ? courses.map((course) => {
                    return (
                        <div className='option' onClick={() => handleSelection(course)}>{course}</div>
                    )
                }) : 'not available'}
            </div>
        </div>
    );
};

export default SearchSelect;