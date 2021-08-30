import React, { useEffect, useState } from 'react';
import styles, {addNote} from "./AddNote.module.scss";
import {IoAdd} from 'react-icons/io5'

export default function AddNote() {
    const [isActive, setIsActive] = useState(false);
    const [content, setContent] = useState({title: '', text: ''})
    
    function updateContent(e) {
        const {value, name} = e.taget;
        setContent( prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function activateForm() {
        setIsActive(true)
    }

    function deactivateForm(e) {
        const form = document.getElementById('addNote');
        if (!form.contains(e.relatedTarget)) setIsActive(false);
    }

    //! add some motion here with conditional classes or some lib
    return <div className={addNote}>
        <form id="addNote" onFocus={activateForm} onBlur={deactivateForm}>
            { !isActive && <p>Add new note: </p> }
            <input 
                type="text" 
                autoComplete="off" 
                name="title" 
                id="title"
                onChange={updateContent}
                value={content.title} />
            { isActive && <>
                <textarea 
                    name="content" 
                    autoComplete="off" 
                    id="content" 
                    cols="30" 
                    rows="10">

                </textarea>
                <button>ADD <IoAdd /></button>
                </>
            }
            
        </form>
    </div>

}