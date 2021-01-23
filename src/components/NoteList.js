import fire from '../config/fire.js';
import React, { useState, useEffect } from 'react';
import NoteFunc from './NoteFunc';
import NoteListC from './NoteListC.css';

export default function NoteList(){

const [noteList, setNoteList] = useState();

    useEffect(() => {
        const notesRef = fire.database().ref("Users")
            .child(fire.auth().currentUser.uid);

        notesRef.on('value', (snapshot) => {
            const notes = snapshot.val();
            const noteList = [];
            for (let id in notes) {
                noteList.push({ id, ...notes[id] });
            }
            setNoteList(noteList);
        });
    }, []);

    return (
        <div>
            {noteList ? noteList.map((note) => (
                <React.Fragment>
                    <div class="sticky-container">
                        <div class="sticky-outer" >
                            <div class="sticky">
                                <svg width="0" height="0">
                                    <defs>
                                        <clipPath id="stickyClip" clipPathUnits="objectBoundingBox">
                                            <path
                                                d="M 0 0 Q 0 0.69, 0.03 0.96 0.03 0.96, 1 0.96 Q 0.96 0.69, 0.96 0 0.96 0, 0 0"
                                                stroke-linejoin="round"
                                                stroke-linecap="square"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div class="sticky-content">
                                    {note.description}
                                </div>
                            </div>
                        </div>
                    </div>
                    <NoteFunc note={note} />
                </React.Fragment>
            )) : ''}
        </div>
    );
}