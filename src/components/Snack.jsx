import React from 'react';
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

function Snack({isOpen, handleClose = Function.prototype}) {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            // open={Boolean(message) && !message.hide}
            // open={isOpen}
            onClose={handleClose}
            autoHideDuration={3000}
        >
            <Alert
                // severity="success"
                // severity={message?.severity || 'error'}
            // {message?.text || "Произошла ошибка"}
            >
                Данные успешно изменены</Alert>
        </Snackbar>
    )
}

export default Snack;