import { Button, Image, Text } from "@geist-ui/react"

const ProductCard = (props) => {
    return (
        <div className="product-card">
            <Text className="product-card-title">{props.title}</Text>
            <Text className="product-card-description">{props.description}</Text>
            <Button className="learnbtn btn-md" auto size="large">더 알아보기</Button>
            <Image className={`product-card-icon ${props.icon == "./king-i.svg" && 'icon-fix'}`} src={props.icon}/>
        </div>
    )
}

export default ProductCard;