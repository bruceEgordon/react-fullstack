import { useState } from "react";
import { motion } from "framer-motion";

const AnimatedButton = ({ handleButonClick }) => {
    const [buttonText, setButtonText] = useState("Click if you like!");
    function buttonClicked(){
        setButtonText("Success!");
        handleButonClick();
    }
    return (
        <div>
            <motion.button whileHover={{ scale: 2 }} onClick={ () => buttonClicked() }>
                {buttonText}</motion.button>
        </div>
    )
}
export default AnimatedButton