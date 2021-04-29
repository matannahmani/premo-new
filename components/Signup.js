import { AutoComplete, Button, Grid, Slider, Spacer } from "@geist-ui/react";
import { countries } from 'typed-countries';
import ISO6391 from 'iso-639-1';
import { useContext, useState } from "react";
import { AnimDiv } from "./AnimDiv";
import { finishSignUp, getUserInfo } from "../lib/userapi";
import { UserContext } from "../context/appcontext";
import { AnimatePresence } from "framer-motion";
import Spinner from "./Spinner";
import { useRouter } from "next/router";
import {firebase} from '../lib/firebase'

const Signup = () => {
    const [user,setUser] = useContext(UserContext);
    const [loading,setLoading] = useState(false);
    const router = useRouter();
    const langs = () => {
        // const result = []
        const names = ISO6391.getAllNames();
        return ISO6391.getAllCodes().map( (e,i) => {
            return {label: names[i],value: names[i]}
        })
    }
    const codes = () => {
        return countries.map((e) => {
            return {label: e.name, value: e.name}
        })
    }
      const [lang, setLangs] = useState()
      const [code, setCodes] = useState()
      const resultHandler = async (submit = false) => {
          if ( lang !== undefined && code !== undefined && lang.length === 1 && code.length === 1){
            const langcode = ISO6391.getCode(lang[0].value);
            const zonecode = countries.find((e) => e.name === code[0].value)
            if (submit){
                setLoading(true);
                const result = await finishSignUp({name: user.displayName,token: user.jwt,languageCode: langcode,countryCode: zonecode.iso});
                if (result.data.result.code == 0){
                    const pinfo = await getUserInfo({jwt: user.jwt}); // fetches user info from server
                    if (pinfo.data !== undefined){
                        setUser({triedLog: true,email: result.data.payload.account,name: result.data.payload.user,uid: result.data.payload.id,pinfo: pinfo.data.payload[0],logged: true,jwt: user.jwt})
                        router.push('/')                    
                    }
                    setLoading(false);
                }
            }
            return [langcode,zonecode.iso];
          }
          return []
      }
      const searchHandler = (list,currentValue,setState) => {
        if (!currentValue) return setState([])
        const relatedOptions = list.filter(item => item.value.toLowerCase().includes(currentValue.toLowerCase()))
        setState(relatedOptions)
      }
    return (
        <Grid.Container style={{padding: '40px',background: '#ECF3F6'}} alignItems="center" direction="column">
            <Grid style={{minHeight: '540px',position: 'relative',width: '540px'}} direction="column" alignItems="center" xs={24} sm={24} md={16} lg={14} xl={12}>
           <AnimatePresence exitBeforeEnter>
               {loading &&
                <AnimDiv className="signup-box" key="loading">
                    <Spinner/>
                </AnimDiv>
                }
                {!loading &&
                    <AnimDiv className="signup-box" key="signup">
                    <Spacer/>
                    <Slider value={2} className="purchase-slider" initialValue={2} min={1} showMarkers disabled max={2}/>
                    <Spacer/>
                    <h2 style={{textAlign: 'center'}} className="purchase-title">Just one last step before<br/> your account is created :</h2>
                    <div className="signnup-title">
                        <h3>Your Language:</h3>
                    </div>
                    <AutoComplete clearable options={lang} placeholder="Enter here" onSearch={(e) => searchHandler(langs(),e,setLangs)} />
                    <div className="signnup-title">
                        <h3>Your Country:</h3>
                    </div>
                    <AutoComplete clearable options={code} placeholder="Enter here" onSearch={(e) => searchHandler(codes(),e,setCodes)} />
                    <Button disabled={resultHandler().length === 0} onClick={() => console.log(resultHandler(true))} className="learnbtn">Submit</Button>
                    </AnimDiv>
                }
           </AnimatePresence>
            </Grid>
        </Grid.Container>
    )
}

export default Signup;