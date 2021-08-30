import React from "react";
import { AiOutlineDelete, AiFillEdit, AiOutlineStar, AiFillStar} from 'react-icons/ai';
import { note, header, body, panel, bottomBtn} from "./Note.module.scss";




export default function Note(props) {

    return <React.Fragment>
        <div className={note}>
            <div className={header}>
                <h2>Note title</h2>
                <AiFillEdit />
            </div>
            <div className={body}>
                <p>text here</p>
                <p>text here</p>
                <p>text here</p>
            </div>
            <div className={panel}>
                <button className={bottomBtn}>
                    <AiOutlineStar />
                </button>
                <button className={bottomBtn}>
                    <AiOutlineDelete />
                </button>
                
            </div>
        </div>
        


    </React.Fragment>
}