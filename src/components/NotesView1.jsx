import React from "react";
import Note from "./Note.jsx";
import AddNote from "./AddNote.jsx";
import { container, addNote } from "./NotesView1.module.scss";


export default function NotesView1() {

    return <React.Fragment>
        <div className={container} >
                <AddNote />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />            
        </div>
    </React.Fragment>
}