import React, { useState, useEffect, useRef } from 'react';
import { db, auth } from '../../firebase';
import SendMessage from './SendMessage';
import '../../chat.css';

import profilePic from '../../Images/profilePic.png';
import duo from '../../Images/duo.png';
import phone from '../../Images/phone.png';

function Chat() {  
    const scroll=useRef();  
    const[messages, setMessages] = useState([]);

    useEffect(() => {
        if(db) {
            const unsubscribe=db
                .collection('messages')
                .orderBy('createdAt')
                .limit(100)
                .onSnapshot((snapshot) => {
                    setMessages(snapshot.docs.map(doc =>
                            doc.data()))
                })
            return unsubscribe;
        }
    }, [db]);

    return(
        <div>
            <div className="container" style={{backgroundColor: "#14213D", width: "100%", height: "500px"}}>
                <div className="content">
                <div className="col">
                    <div className="row pt-5 pl-5 pr-5">
                        <img src={profilePic} style={{width: "50px", height: "50px"}}/>
                        <div className="col" style={{marginLeft: "30px"}}>
                            <h2 style={{color: "white"}}><b>Jane Doe</b></h2>
                            <p style={{color: "white"}}>Tap here for more information</p>
                        </div>
                        <img src={duo} style={{width: "30px", height: "30px", marginRight: "30px"}}/>
                        <img src={phone} style={{width: "30px", height: "30px"}}/>
                    </div>
                    <div style={{backgroundColor: "white"}}>
                        <hr/>
                    </div>
                    <div className="msgs">
                        {messages.map(({id, text, photoURL, uid}) => (
                            <div>
                                {/* <p>{firebase.firestore.FieldValue.serverTimestamp()}</p> */}
                                <div key={id} className={`msg ${uid==auth.currentUser.uid ? 'box1 sent' : 'box2 received'}`}>
                                    {/* <img src={profilePic}/> */}
                                    {uid!=auth.currentUser.uid ? <img src={profilePic} style={{marginLeft: "5px", marginRight: "5px"}}/> : <></> }
                                    <img src={photoURL} alt=""/>
                                    <p className="texts">{text}</p>
                                    {uid==auth.currentUser.uid ? <img src={profilePic} style={{marginLeft: "5px", marginRight: "5px"}}/> : <></> }
                                    {/* <img src={profilePic}/> */}
                                </div>
                            </div>
                        ))}
                    </div>
                    <SendMessage/>
                </div>
                </div>
            </div>
            {/* <div className="container" style={{height: "20px"}}/> */}
        </div>
    )
}

export default Chat;