import React, { useState } from 'react';
import { db, auth } from '../../firebase';
import firebase from 'firebase';
import { Input, IconButton } from '@material-ui/core';
import '../../chat.css';
import SendIcon from '@material-ui/icons/Send';

import img from '../../Images/img.png';
import link from '../../Images/link.png';

function SendMessage() {
    const [msg, setMsg] = useState('');

    async function sendMessage(e) {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;
        
        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('');
    }

    return(
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <img src={link} style={{width: "30px", height: "30px",
                        marginLeft: "20px", marginTop: "13px"}}/>
                    <img src={img} style={{width: "30px", height: "20px",
                        marginLeft: "20px", marginTop: "18px"}}/>
                    <Input 
                        style={{
                            width: '90%',
                            fontSize: '15px',
                            marginLeft: '50px',
                            paddingTop: "20px",
                            paddingBottom: "20px",
                            color: "white",
                            height: "30px"
                        }}
                        type="text"
                        value={msg} 
                        onChange={(e) => setMsg(e.target.value)}
                        placeholder="Typing..." />
                    <IconButton 
                        style={{
                            width: '18%',
                            margin: '4px 5% -13px 5%',
                            maxWidth: '200px',
                            marginRight: "-20px",
                            color: '#FCA311'
                        }}
                        aria-label="send"
                        type="submit">
                        <SendIcon/>
                    </IconButton>
                </div>
            </form>
        </div>
    )
}

export default SendMessage;