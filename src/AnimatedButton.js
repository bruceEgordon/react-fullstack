import { motion
 } from "framer-motion"
const AnimatedButton = ({ handleButonClick }) => {
    return (
        <div>
            <motion.button whileHover={{ scale: 2 }} onClick={ () => handleButonClick() }>
                Click if you like!</motion.button>
        </div>
    )
}
export default AnimatedButton