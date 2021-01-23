import React from 'react';
import fire from './config/fire.js';
import Note from './Note.js';
import NoteList from './components/NoteList';


class Home extends React.Component{

    constructor(){
        super();

        this.state={
            show: false,
        }

    }

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

  this.setState({
    show: false
})

}

open(){
  this.setState({
      show: !this.state.show
  })
}




render(){
    return(
        <div>
        <h1>You are logged in</h1>
        <button onClick={()=>this.open()}>Add Note</button>
        <button onClick={this.logout}>Logout</button>
        {
        this.state.show ?
        <div>     
           <input type="text" id="description" size="50"/>
           <button onClick={()=> {this.open(); this.createNote();}}>Save</button>
        </div>:null
        }

        <div className ="Home">
            <h1>Notes</h1>
            <NoteList />
        </div>



    </div>


 

        )


    }
}



export default Home;