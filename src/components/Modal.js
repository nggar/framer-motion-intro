import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const backdrop = {
    visible: {
        opacity: 1
    },
    hidden: {
        opacity: 0
    }
}

const modal = {
    hidden: {
        y: '-110vh',
        opacity: 0
    },
    visible: {
        y: 300,
        opacity: 1,
        transition: {
            delay: .5
        }
    },
    exit: {
        y: '110vh',
        opacity: 0
    }
}

const Modal = ( { showModal, setShowModal } ) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div className='backdrop'
                    variants={backdrop}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                >
                    <motion.div className='modal'
                        variants={modal}
                    >
                        <p>Want to make another pizza?</p>
                        <Link to='/'>
                            <button>Start again</button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal;