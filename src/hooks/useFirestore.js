import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'
import firebase from 'firebase'

const useFirestore = (collection, searchById) => {
    const [docs, setDocs] = useState([])

    useEffect(() => {
        searchById ? projectFirestore.collection(collection)
            .where(firebase.firestore.FieldPath.documentId(), '==', searchById)
            .onSnapshot((snap) => {
                let documents = []
                snap.forEach(doc => {
                    documents.push({ ...doc.data(), id: doc.id })
                })
                setDocs(documents)
            })
        : projectFirestore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {
            let documents = []
            snap.forEach(doc => {
                documents.push({ ...doc.data(), id: doc.id })
            })
            setDocs(documents)
        })
    }, [collection])

    return { docs }
}

export default useFirestore

