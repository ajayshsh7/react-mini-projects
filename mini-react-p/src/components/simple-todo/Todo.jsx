import { useState } from 'react'


function Todo(){



    return(
        <>
        <form>
            <div className='form'>
                <label htmlFor="item"> Add Notes</label>
                <input type="text" id='item' />
            </div>
            <button className='btn'>Add</button>
        </form>
        </>
    );
}

export default Todo;