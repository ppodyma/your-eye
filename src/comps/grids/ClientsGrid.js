import React from 'react'
import useFirestore from '../../hooks/useFirestore'
import { motion } from 'framer-motion'
import './ClientGrid.css'
import { Link } from 'react-router-dom'

const ClientsGrid = ({ clients }) => {
    return (
        <div className="client-grid">
            {clients && clients.map(client => (
                <motion.div className="client-wrap" key={client.id}
                    layout
                >
                    <motion.div
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{ delay: 1}}
                    >
                    <Link to={{ pathname: `/clients/${client.id}`, clientId: client.id}}>
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
                    </Link>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    )
}

export default ClientsGrid