import { AutoComplete, Button, Grid, Select } from "@geist-ui/react";
import { countries } from 'typed-countries';
import ISO6391 from 'iso-639-1';
import { useState } from "react";

const Signup = () => {
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

      const searchHandler = (list,currentValue,setState) => {
        if (!currentValue) return setState([])
        const relatedOptions = list.filter(item => item.value.toLowerCase().includes(currentValue.toLowerCase()))
        setState(relatedOptions)
      }
    return (
        <Grid.Container>
            <Grid xs>
            {/* <Select placeholder="Region">
                {countries.map((e) => (
                    <Select.Option value={e.iso}>{e.name}</Select.Option>
                ))}
            </Select>
            <Select placeholder="Language">
                {codes().map((e) => (
                    <Select.Option value={e.code}>{e.name}</Select.Option>
                ))}
            </Select> */}
            <AutoComplete options={lang} placeholder="Enter here" onSearch={(e) => searchHandler(langs(),e,setLangs)} />
            <AutoComplete options={code} placeholder="Enter here" onSearch={(e) => searchHandler(codes(),e,setCodes)} />
            <Button className="learnbtn"/>
            </Grid>
        </Grid.Container>
    )
}

export default Signup;