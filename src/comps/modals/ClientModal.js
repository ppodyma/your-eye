import React, {useState} from 'react'
import { motion } from 'framer-motion'
import { projectStorage, projectFirestore, timestamp } from '../../firebase/config'
import useFirestore from '../../hooks/useFirestore'
import "./client-modal.css"


const ClientModal = ({ setOpenClientModal }) => {
    
    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setOpenClientModal(false)
        }
    } 
   
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [typeOfWork, setTypeOfWork] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [mainComplaint, setMainComplaint] = useState('');
    const [pastEyeDiseases, setPastEyeDiseases] = useState('');
    const [clientHasDiabetes, setClientHasDiabetes] = useState(false);
    const [clientHasThyroid, setClientHasThyroid] = useState(false);
    const [clientHasGlaucoma, setClientHasGlaucoma] = useState(false);
    const [clientHasMigraine, setClientHasMigraine] = useState(false);
    const [clientHasUnregulatedPressure, setClientHasUnregulatedPressure] = useState(false);
    const [clientHasKidneyDisease, setClientHasKidneyDisease] = useState(false);
    const [clientMedicationsTaken, setClientMedicationsTaken] = useState('');

    const submitValue = () => {
        const createdAt = timestamp()
        const frmdetails = {
            'firstName' : fName,
            'lastName' : lName,
            'phone' : phone,
            'email' : email,
            'birthDate' : birthDate,
            'typeOfWork' : typeOfWork,
            'mainComplaint' : mainComplaint,
            'pastEyeDiseases' : pastEyeDiseases,
            'clientHasDiabetes' : clientHasDiabetes,
            'clientHasThyroid' : clientHasThyroid,
            'clientHasGlaucoma' : clientHasGlaucoma,
            'clientHasMigraine' : clientHasMigraine,
            'clientHasUnregulatedPressure' : clientHasUnregulatedPressure,
            'clientHasKidneyDisease' : clientHasKidneyDisease,
            'clientMedicationsTaken' : clientMedicationsTaken,
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
                        <input type="text" placeholder="Birth Date" onChange={e => setBirthDate(e.target.value)} />
                        <input type="text" placeholder="Rodzaj wykonywanej pracy" onChange={e => setTypeOfWork(e.target.value)} />
                        <input type="text" placeholder="Skarga główna" onChange={e => setMainComplaint(e.target.value)} />
                        <input type="text" placeholder="Przebyte choroby oka" onChange={e => setPastEyeDiseases(e.target.value)} />
                        <span>
                            Cukrzyca<input type="checkbox" checked={clientHasDiabetes} onClick={() => setClientHasDiabetes(!clientHasDiabetes)} />
                        </span>
                        <span>
                            Tarczyca<input type="checkbox" onClick={() => setClientHasThyroid(!clientHasThyroid)} />
                        </span>
                        <span>
                            Jaskra<input type="checkbox" onClick={() => setClientHasGlaucoma(!clientHasGlaucoma)} />
                        </span>
                        <span>
                            Migrena<input type="checkbox" onClick={() => setClientHasMigraine(!clientHasMigraine)} />
                        </span>
                        <span>
                            Nieuregulowane ciśnienie<input type="checkbox" onClick={() => setClientHasUnregulatedPressure(!clientHasUnregulatedPressure)} />
                        </span>
                        <span>
                            Choroby nerek<input type="checkbox" onClick={() => setClientHasKidneyDisease(!clientHasKidneyDisease)} />
                        </span>
                        <input type="text" placeholder="Przyjmowane leki" onChange={e => setClientMedicationsTaken(e.target.value)} />
                        <button onClick={submitValue}>Submit</button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ClientModal