import React, {ChangeEvent, useState} from 'react';
import {requestAPI} from './RequestsAPI';
import {Button, Checkbox, FormControlLabel} from '@material-ui/core';
import {Fastfood, FastfoodTwoTone, Favorite, FavoriteBorder} from '@material-ui/icons';
import s from './Request.module.css'

const Request: React.FC = () => {
    let [message, setMessage] = useState<string>(`if you like fast food, click on the bun  and push the button and push the button SEND`)
    const [success, setSuccess] = useState<boolean>(true)
    const onchangeCallbackCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setSuccess(e.currentTarget.checked)
    }
    const onchangeCallbackButton = () => {
        console.log(success)
        requestAPI.postRequest(success).then(d => setMessage(d.errorText)).catch((error) => {
            setMessage(error.response.data.errorText)
        })
    }
    return <div className={s.container}>
        Result of response: {message}
        <hr/>
        <FormControlLabel
            control={<Checkbox
                icon={<Fastfood/>}
                color="primary"
                checkedIcon={<FastfoodTwoTone/>}
                name="checkedH"
                onChange={onchangeCallbackCheckbox}/>}
            label="⇐tasty food?"
        />
        <Button
            onClick={onchangeCallbackButton}
            variant="contained"
            color="primary">
            Send
        </Button>

    </div>
}

export default Request;