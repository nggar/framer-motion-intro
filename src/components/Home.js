import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.5,
            delay: .5
        }
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' }
    }
}

const Home = () => {
    return (
        <motion.div className="home container"
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={containerVariants}
        >
            <motion.h2>
                Welcome to Pizza Joint
            </motion.h2>
            <Link to="/base">
                <motion.button
                    whileHover='hover'
                    variants={buttonVariants}
                >
                    Create Your Pizza
                </motion.button>
            </Link>
        </motion.div>
    )
}

export default Home;