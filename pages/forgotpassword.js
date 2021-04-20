import { Button, Card, Grid, Input, Note, Spacer, useToasts } from "@geist-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import PageLayout from "../components/PageLayout";
import { resetPassword } from "../lib/userapi";

const ForgotPassword = () => {

    const [email,setEmail] = useState('')
    const [loading,setLoading] = useState(false)
    const [,setToast] = useToasts();
    const router = useRouter();
    const validateEmail = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email.length > 4 && re.test(String(email).toLowerCase())) // email and bigger then 4
            return false
        else
            return true
    }
    const resetHandler = async () => {
        setLoading(true);
        const result = await resetPassword({email});
        if (result.data.result.code === 0){
            setToast({type: 'success', text: 'Email sent'})
            router.replace('/login')
        }else{
            setToast({type: 'error', text: 'Email not found!'})
        }
        setLoading(false);
    }
    return (
        <PageLayout>
            <h1 className="price-section-title">Reset Password</h1>
            <Spacer y={2}/>
            <Card shadow style={{borderRadius: '16px'}}>
            <Grid style={{display: 'flex'}} alignItems="center" justify="center" direction="column">
                <Note type="secondary">After pressing reset password an email will be sent.</Note>
                <Spacer/>
                <Input onChange={(e) => setEmail(e.target.value)} placeholder="alanturing@gmail.com" width="240px">
                    Email
                </Input>
                <Spacer/>
                <Button disabled={validateEmail()} onClick={resetHandler} className="learnbtn" loading={loading} auto>Reset Password</Button>
            </Grid>
            </Card>
        </PageLayout>
    )
}

export default ForgotPassword;