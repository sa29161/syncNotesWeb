import fire from '../config/fire.js';
import React, { useState, useEffect } from 'react';
import NoteFunc from './NoteFunc';

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

  return(
  <div>
    {noteList ? noteList.map((note) => (
      <React.Fragment>
  
        <h1> {note.description} </h1>
        <NoteFunc note={note}/>
        </React.Fragment>
        )): ''  }
    </div>
  );
    }