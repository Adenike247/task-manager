import React from 'react'
import Cancel from '../assets/svg/Cancel'
import styles from "../../styles/Popup.module.css"
const Popup = ({ closeModal, children }) => {
    return (
        <>
            <div className={styles.modal}>
                {/* Modal content */}
                <div className={styles.modalContent}>
                    <span className={styles.close} onClick={closeModal}>
                        <Cancel />
                    </span>
                   
                    {children}
                </div>
            </div>
        </>
    )
}

export default Popup