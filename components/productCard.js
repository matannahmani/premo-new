import { Button, Image, Text } from "@geist-ui/react"

const ProductCard = (props) => {
    return (
        <div className="product-card">
            <Text className="product-card-title">{props.title}</Text>
            <Text className="product-card-description">{props.description}</Text>
            <Button className="learnbtn btn-md" auto size="large">Learn More</Button>
            <Image className="product-card-icon" src={props.icon}/>
        </div>
    )
}

export default ProductCard;