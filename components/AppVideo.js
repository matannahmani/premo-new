import { Image, Text } from "@geist-ui/react"

const AppVideo = (props) => {

    return (
        <div className="app-video">
            <div className="app-video-header">
                <Image className="app-video-icon" src={props.icon}/>
                <Text className="app-video-title" h4>{props.title}</Text>
            </div>
            {!props.hide && 
            <div className={`app-video-box ${props.flip === true && 'app-video-box-flip'}`}>
            <Image className={`app-video-img ${props.flip === true && 'app-video-box-flip'}`} src={props.img}/>
            <div className="app-video-container">
            </div>
            </div>
            }

        </div>
    )
}
export default AppVideo;