import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 110,
        }
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' }
    }
}

const nextVariants = {
    hidden: {
        x: '-100vw'
    },
    visible: {
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 120
        }
    }
}

const buttonVariants = {
    hover: {
        scale: 1.1,
        textShadow: '0 0 8px rgb(255,255,255)',
        boxShadow: '0 0 8px rgb(255,255,255)',
        transition: {
            duration: .4,
            yoyo: Infinity
        }
    }
}

const Base = ( { addBase, pizza } ) => {
    const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

    return (
        <motion.div className="base container"
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={containerVariants}
        >

            <h3>Step 1: Choose Your Base</h3>
            <ul>
                {bases.map( base => {
                    let spanClass = pizza.base === base ? 'active' : '';
                    return (
                        <motion.li key={base} onClick={() => addBase( base )}
                            whileHover={{ scale: 1.2, originX: 0, color: '#f8e112' }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <span className={spanClass}>{base}</span>
                        </motion.li>
                    )
                } )}
            </ul>

            {pizza.base && (
                <motion.div className="next"
                    variants={nextVariants}
                >
                    <Link to="/toppings">
                        <motion.button
                            whileHover='hover'
                            variants={buttonVariants}
                        >
                            Next
                        </motion.button>
                    </Link>
                </motion.div>
            )}

        </motion.div>
    )
}

export default Base;