import React from 'react';
import fire from './config/fire.js';
import Note from './Note.js';
import NoteList from './components/NoteList';



class Home extends React.Component{


logout(){
    fire.auth().signOut();
}

createNote(){
const des = document.querySelector('#description').value;
const id = fire.database().ref("Users").child(fire.auth().currentUser.uid).push().key;
const note = new Note(des,id);

const ref = fire.database().ref("Users")
.child(fire.auth().currentUser.uid)
.child(id);


ref.set(note);
}

// getNotes(){
//     const notesRef = fire.database().ref("Users")
//     .child(fire.auth().currentUser.uid);

//     notesRef.on("value",(snapshot) => {
//     const notes = snapshot.val();
  
//     for(let id in notes){
//      this.noteList.push(notes[id]);

//     }

//     });


// }

// delete(){
//     const notesRef = fire.database().ref("Users")
//     .child(fire.auth().currentUser.uid).child(note.key);

//     notesRef.remove();
    
// }






render(){
    return(
            <div>
                <h1>You are logged in</h1>
                <input id="description" type="text"/>
                <button onClick={this.createNote}>Add Note</button>
                <button onClick={this.logout}>Logout</button>
                <div className ="Home">
                    <h1>Notes</h1>
                    <NoteList />
                 
                  
                </div>



            </div>

 

        )


    }
}



export default Home;