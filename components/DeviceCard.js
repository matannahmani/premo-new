import { Image, Spacer, Text } from "@geist-ui/react"

const DeviceCard = ({title, children,img}) => {

    return (
    <div className="device-card-carousel-item" key={title}>
        <Image src={img}/>
        <Spacer/>
        <Text h3>{title}</Text>
        <Text p>{children}
        </Text>
    </div>
    )
}

export default DeviceCard;