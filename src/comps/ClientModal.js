import React, {useState} from 'react'
import { motion } from 'framer-motion'
import { projectStorage, projectFirestore, timestamp } from '../firebase/config'
import useFirestore from '../hooks/useFirestore'
import "./client-modal.css"


const ClientModal = ({ setOpenClientModal }) => {
    
    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setOpenClientModal(false)
        }
    } 
   
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const submitValue = () => {
        const createdAt = timestamp()
        const frmdetails = {
            'firstName' : fName,
            'lastName' : lName,
            'phone' : phone,
            'email' : email,
            'createdAt': createdAt
        }

        const collectionRef = projectFirestore.collection('clients')
        // collectionRef.add({ url, createdAt })
        collectionRef.add(frmdetails).then(response => console.log('ADDED CLIENT', response))
        console.log(frmdetails);
    }


    return (
        <motion.div className="backdrop" onClick={handleClick}
           initial={{ opacity: 0}} 
           animate={{ opacity: 1}} 
        >
            <motion.div
                className="container"
                initial={{ y: "-100vh"}}
                animate={{ y: 0}}
            >
                <div className="add-client-wrap">
                    <p>
                        Add Client
                    </p>
                    <input type="text" placeholder="First Name" onChange={e => setfName(e.target.value)} />
                    <input type="text" placeholder="Last Name" onChange={e => setlName(e.target.value)} />
                    <input type="text" placeholder="Phone" onChange={e => setPhone(e.target.value)} />
                    <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    <button onClick={submitValue}>Submit</button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ClientModal