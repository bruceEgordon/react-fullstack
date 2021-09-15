import { createInstance } from "@optimizely/optimizely-sdk";
import { useState, useEffect } from "react";
import AnimatedButton from "./AnimatedButton";

const FsFeature = ({userId}) => {
    const [decision, setDecision] = useState(null);
    const [theUser, setTheUser] = useState(null);

    useEffect(() => {
        const optiClientInst = createInstance({sdkKey: '4d2RRVwJzjzC2wFqLntwq'});
        optiClientInst.onReady().then(() => {
            const user = optiClientInst.createUserContext(userId);
            setTheUser(user);
            setDecision(user.decide('product_recs_flag'));
        });       
    }, [userId]);

    const handleButonClick = () => {
        theUser.trackEvent('Add to cart');
    }

    return ( 
        <div className="feature">
            <h2>Full Stack Feature</h2>
            <div>User ID is: {userId}</div>
            {decision && <div>Featuer enabled: {decision.enabled.toString()}</div>}
            {decision && <div>The number of recommendations is: {decision.variables['number_of_recs']}</div>}
            {decision && decision.enabled && <AnimatedButton handleButonClick={handleButonClick} />}
            {console.log(decision)}
        </div>
     );
}
 
export default FsFeature;