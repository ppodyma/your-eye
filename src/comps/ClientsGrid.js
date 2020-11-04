import React from 'react'
import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion'

const ClientsGrid = () => {
    const { docs } = useFirestore('clients')
    console.log('CL', docs)
    return (
        <div className="img-grid">
            {docs && docs.map(client => (
                <motion.div className="img-wrap" key={client.id}
                    layout
                >
                    <motion.div
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{ delay: 1}}
                    >
                    <div>

                        {client.firstName}
                        {client.lastName}
                        {/* {client.phone}
                        {client.email}
                        {client.createdAt} */}
                    </div>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    )
}

export default ClientsGrid