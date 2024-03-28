import React, {useState} from "react";
import { Alert } from "reactstrap";

const AlertInfo = ({message}) => {
    const [visible, setVisible] = useState(true);

    const onDismiss = () => setVisible(false);
    return (
        <React.Fragment>
            <div>
            <Alert color="info" isOpen={visible} toggle={onDismiss}>
                {message}
            </Alert>

            </div>
        </React.Fragment>
    );
}

export default AlertInfo;