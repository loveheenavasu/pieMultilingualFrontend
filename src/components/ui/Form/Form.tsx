"use client"
import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import './Form.css'gi

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const Form = () => {
    return (
        <div className='form-container'>
            <div className='black-background'>
                <p className='heading'>Request a FREE QUOTES</p>
                <p className='heading-partner'>Partner will multiligual exportal</p>
                <p className='heading-partner'>Save your cost within 12 hours</p>
            </div>

            <div className='form'>
                <form>
                    <div className='form-name'>
                        <input className='form-common' placeholder='Name' type='text' id='name' name='name' required />
                    </div>
                    <div className='form-email'>
                        <input className='form-common' placeholder='Email' type='email' id='email' name='email' required />
                    </div>
                    <div className='form-phone'>
                        <input className='form-common' placeholder='Phone' type='tel' id='phone' name='phone' required />
                    </div>
                    <div className='form-message'>
                        <textarea id='message' name='message' placeholder='Write Paragragh' rows={8} required></textarea>
                    </div>
                    <div className='form-file'>
                        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                            Upload files
                            <VisuallyHiddenInput type="file" />
                        </Button>
                        <div className='files-upload'>
                            <p className='file-upload-text'>Max 4 files</p>
                            <p className='file-upload-text'>(send action)</p>
                        </div>
                    </div>
                    <div>

                        <button className="send-button" type='submit'><img className='send-img' src="/images/send.png" alt="send" />Send</button>
                    </div>
                    <p className='bottom-text'>We request private policy</p>
                </form>
            </div>
        </div>
    )
}

export default Form
