import React from 'react'
import useFirestore from '../../hooks/useFirestore'
import { motion } from 'framer-motion'
import './ClientGrid.css'

const ClientsGrid = () => {
    const { docs } = useFirestore('clients')
    console.log('CL', docs)
    return (
        <div className="client-grid">
            {docs && docs.map(client => (
                <motion.div className="client-wrap" key={client.id}
                    layout
                >
                    <motion.div
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{ delay: 1}}
                    >
                    <div className='client'>
                        <div>
                        <i class="fas fa-user-circle"></i>
                        </div>
                        {client.firstName}
                        {" "}
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