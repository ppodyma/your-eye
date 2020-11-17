import React from 'react'
import useFirestore from '../../hooks/useFirestore';

export default function ClientDetails({ location }) {
    const clientId = location.pathname
    const { docs } = useFirestore('clients', clientId.split('/')[2])
    console.log('GET DATA', docs)
    const data = docs[0]
    console.log('TTT', data)
    // const { birthDate, clientHasDiabetes, clientHasGlaucoma, clientHasKidneyDisease, 
    //     clientHasMigraine, clientHasThyroid, clientHasUnregulatedPressure, clientMedicationsTaken,
    //     email, firstName, lastName, mainComplaint, pastEyeDiseases, phone, typeOfWork } = data

        return (
        <div>
            XD
            {clientId}
            <div>{firstName}</div>
            <div>{lastName}</div>
            <div>{phone}</div>
            <div>{email}</div>
            {/* <div>{birthDate && birthDate}</div> */}
            <div>{typeOfWork}</div>
            <div>{clientHasDiabetes}</div>
            <div>{clientHasGlaucoma}</div>
            <div>{clientHasKidneyDisease}</div>
            <div>{clientHasMigraine}</div>
            <div>{clientHasThyroid}</div>
            <div>{clientHasUnregulatedPressure}</div>
            <div>{clientMedicationsTaken}</div>
            <div>{mainComplaint}</div>
            <div>{pastEyeDiseases}</div>
        </div>
    )
}
