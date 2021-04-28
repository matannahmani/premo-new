import { Button, Image, Select, Text } from "@geist-ui/react"
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/appcontext";

const PriceSelect = ({onChange,disabled}) => (
    <Select disabled={disabled} width="80px" initialValue="1" onChange={onChange}>
        {[...Array(10)].map((_,i) => 
        <Select.Option key={i} value={`${i+1}`}>{i+1}</Select.Option>
        )}
    </Select>
)
const ProductCard = (props) => {
    const [user,] = useContext(UserContext);
    const router = useRouter();
    const [qty,setQty] = useState(props.qty || 1)

    useEffect(() => {
        if (props.purchase){
            router.push({url: '',query: {...router.query,qty: qty}},undefined,{shallow: true})
            if (props.onChange !== undefined)
            props.onChange(qty * props.price);
        }
    },[qty])
    return (
        <div style={props.style} className="product-card">
            <Text className="product-card-title">{props.title}</Text>
            {!props.purchase &&
            <>
            <Text className="product-card-description">{props.description}</Text>
            <Link href={`${user.logged ? '/purchase?item=' + props.title : '/login'}`}>
            <Button className="learnbtn btn-md" auto size="large">{props.buy}</Button>
            </Link>
            </>
            }
            {props.purchase &&
                <div style={{display: 'flex',alignItems: 'center',justifyContent: 'space-evenly'}}>
                <Text className="product-card-description">{qty * props.price} ₩</Text>
                {props.qtyselect && <PriceSelect disabled={props.disabled} onChange={(e) => setQty(e)}/>}
                </div>
            }
            <Image className={`product-card-icon ${props.icon == "./king-i.svg" && 'icon-fix'}`} src={props.icon}/>
        </div>
    )
}

export default ProductCard;