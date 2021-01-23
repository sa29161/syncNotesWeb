import React, { useState} from 'react';
import fire from '../config/fire.js';
import Note from '../Note.js';


export default function NoteFunc({ note }) {

  const [showModal, setModal] = useState(); 
  const [showButton, setButton] = useState();


  const deleteNote = () => {
    const notesRef = fire.database().ref("Users")
    .child(fire.auth().currentUser.uid).child(note.id);
    notesRef.remove();
  };

  const editNote = () => {
    const des = document.querySelector('#des').value;
    const notesRef = fire.database().ref("Users")
    .child(fire.auth().currentUser.uid).child(note.id);
    
    const newNote = new Note(des,note.id);
    notesRef.update(newNote);
    setModal("");
    setButton("");
    
  };

  const EditBox = () => {
  return <textarea id = "des"
  rows = "10"
  cols = "50"
  placeholder = "Your text here"
  />;
  }

  const SaveBtn = () => {
    return  <button onClick={editNote}>Save</button>;
    }


  return (
    <div>
      <button style={{ position: 'relative', left: '50%' }} onClick={deleteNote}>Delete</button>
      <button style={{ position: 'relative', left: '50%' }} onClick={() => {setModal(EditBox);setButton(SaveBtn)}}>Edit</button>
      <div  style={{ position: 'fixed', left: '70%', top: '30%'}}>{showModal}<br/>
      {showButton}

      </div>
    </div>

  );
}