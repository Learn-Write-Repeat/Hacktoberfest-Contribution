import { useState, useEffect} from "react";
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import './Notebook.css';
import firebasedb from './uhi';



const Notebook = ({help, handleLogout}) => {
  const [noteobject, setNoteobject] = useState('');

  useEffect(() => {
    if(help !== ""){
        firebasedb.database().ref().child(help).on("value",snapshot => {
            if(snapshot.val() != null)
                setNoteobject({...snapshot.val()});
        }) 
    }
    
}, [])
  const [notes, setNotes] = useState([

    Object.keys(noteobject).map((asid) => {
      return ({
      id: noteobject[asid].id,
      text: noteobject[asid].text,
      date: noteobject[asid].date,
    })
  }) ]);
  
  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  

  useEffect(() => {
    if(help !== ""){
        firebasedb.database().ref().child(help).on("value",snapshot => {
            if(snapshot.val() != null){
              var messagessDB = [];
                Object.keys(snapshot.val()).map(asid => {
                    messagessDB.push(snapshot.val()[asid])
                })
                setNotes(messagessDB);
            }
                
        }) 
    }

  },[]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id:nanoid(),
      text:text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    firebasedb.database().ref(help).set(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    firebasedb.database().ref(help).set(newNotes);
  }

  const noteskhali = () => {
    setNotes([]);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='containerha'>
        <Header noteskhali={noteskhali} handleTOggleDarkMode={setDarkMode} handleLogout={handleLogout}/>
        
        <NotesList 
          help={help}
          handleAddNote={addNote}
          handleDeleteNode={deleteNote}

        />
      </div>

    </div>
  );


};

export default Notebook;
/*<Search handleSearchNote={setSearchText} />*/