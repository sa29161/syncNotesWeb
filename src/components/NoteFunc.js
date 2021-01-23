import React from 'react';
import fire from '../config/fire.js';
import Note from '../Note.js';


export default function NoteFunc({ note }) {
   


  const deleteNote = () => {
    const notesRef = fire.database().ref("Users")
    .child(fire.auth().currentUser.uid).child(note.id);
    notesRef.remove();
  };

  const updateNote = () => {

    const notesRef = fire.database().ref("Users")
    .child(fire.auth().currentUser.uid).child(note.id);
    const newNote = new Note('l',note.id);
    notesRef.update(newNote);
    
  };


  return (
     <div>
       <button style={{ position: 'relative', left: '50%'}} onClick={deleteNote}>Delete</button>
      <br/>
      {/* <button onClick= {updateNote()}>Update</button> */}
    </div>

    


  );
}