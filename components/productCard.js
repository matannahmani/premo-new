import { Button, Image, Select, Text } from "@geist-ui/react"
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PriceSelect = ({onChange}) => (
    <Select width="80px" initialValue="1" onChange={onChange}>
        {[...Array(10)].map((_,i) => 
        <Select.Option value={`${i+1}`}>{i+1}</Select.Option>
        )}
    </Select>
)
const ProductCard = (props) => {
    const router = useRouter();
    const [qty,setQty] = useState(props.qty || 1)

    useEffect(() => {
        router.push({url: '',query: {...router.query,qty: qty}},undefined,{shallow: true})
        if (props.onChange !== undefined)
            props.onChange(qty * props.price);
    },[qty])
    return (
        <div className="product-card">
            <Text className="product-card-title">{props.title}</Text>
            {!props.purchase &&
            <>
            <Text className="product-card-description">{props.description}</Text>
            <Link href={'/purchase?item='+props.title}>
            <Button className="learnbtn btn-md" auto size="large">더 알아보기</Button>
            </Link>
            </>
            }
            {props.purchase &&
                <div style={{display: 'flex',alignItems: 'center',justifyContent: 'space-evenly'}}>
                <Text className="product-card-description">{qty * props.price} ₩</Text>
                {props.qtyselect && <PriceSelect onChange={(e) => setQty(e)}/>}
                </div>
            }
            <Image className={`product-card-icon ${props.icon == "./king-i.svg" && 'icon-fix'}`} src={props.icon}/>
        </div>
    )
}

export default ProductCard;