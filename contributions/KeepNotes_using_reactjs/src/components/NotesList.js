import { useState  } from 'react';
import { useEffect } from 'react';
import Note from './Note';
import AddNote from './AddNote';
import firebasedb from '../uhi';



const NotesList = ({
        help,
        handleAddNote,
        handleDeleteNode
    }) => {
    
    const [noteobject, setNoteobject] = useState('');

    useEffect(() => {
        if(help !== ""){
            firebasedb.database().ref().child(help).on("value",snapshot => {
                if(snapshot.val() != null)
                    setNoteobject({...snapshot.val()});
            }) 
        }
        
    }, [])
    //console.log(noteobject);
    //console.log(notes);
    return (
        <div className='notes-list'>
            {(noteobject !== null) ? 
                Object.keys(noteobject).map((asid) => {
                return <Note
                    id={noteobject[asid].id}
                    text={noteobject[asid].text}
                    date={noteobject[asid].date}
                    handleDeleteNote={handleDeleteNode}
                />
            })
            : <></>
            
            }
            <AddNote handleAddNote={handleAddNote} />
        </div>
        
    );
};
export default NotesList;