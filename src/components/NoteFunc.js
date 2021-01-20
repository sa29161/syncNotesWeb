import React from 'react';
import fire from '../config/fire.js';

export default function NoteFunc({ note }) {
  const deleteNote = () => {
    const notesRef = fire.database().ref("Users")
    .child(fire.auth().currentUser.uid).child(note.id);
    notesRef.remove();
  };

  return (
    <div>
      <button onClick={deleteNote}>Delete</button>
    </div>
  );
}