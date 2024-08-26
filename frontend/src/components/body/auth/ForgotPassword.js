import React, { useState } from 'react'
import axios from 'axios'
import { isEmail } from '../../utils/validation/Validation'
import { showErrMsg, showSuccessMsg } from '../../utils/notification/Notification'
import loginImage from '../../../assets/for.png'
import "../../../styles/forgotps.css"

const initialState = {
    email: '',
    err: '',
    success: ''
}

function ForgotPassword() {
    const [data, setData] = useState(initialState)

    const { email, err, success } = data

    const handleChangeInput = e => {
        const { name, value } = e.target
        setData({ ...data, [name]: value, err: '', success: '' })
    }

    const forgotPassword = async () => {
        if (!isEmail(email))
            return setData({ ...data, err: 'Invalid emails.', success: '' })

        try {
            const res = await axios.post('http://localhost:5000/user/forgot', { email })

            return setData({ ...data, err: '', success: res.data.msg })
        } catch (err) {
            err.response.data.msg && setData({ ...data, err: err.response.data.msg, success: '' })
        }
    }

    return (
        <>
         <body className='pass-page'>

        <div className="pass-img">
            <img
                src={loginImage} // Replace with the actual path to your image
                alt="Login Image"
            />
            <div className="pass">
                <h2>Forgot Your Password?</h2>

                <div className="row">
                    {err && showErrMsg(err)}
                    {success && showSuccessMsg(success)}

                    <label htmlFor="email">Enter your email address</label>
                    <input type="email" name="email" id="email" value={email}
                        onChange={handleChangeInput} />
                    <button onClick={forgotPassword}>Verify your email</button>
                </div>
            </div>
            </div>
            </body>
        </>
    )
}

export default ForgotPassword
