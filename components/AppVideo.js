import { Image, Text } from "@geist-ui/react"

const AppVideo = (props) => {

    return (
        <div style={props.style} className={`app-video ${props.flip ? "app-video-margin" : ''}`}>
            <div className="app-video-header">
                <Image className="app-video-icon" src={props.icon}/>
                <Text className="app-video-title" h4>{props.title}</Text>
            </div>
            {!props.hide && 
            <div className={`app-video-box ${props.flip && 'app-video-box-flip'}`}>
            <Image className={`app-video-img ${props.flip && 'app-video-box-flip'}`} src={props.img}/>
            <iframe width="560" className="app-video-container" style={props.flip && {transform: 'scale(-1,1)'}} height="315" src="https://www.youtube.com/embed/xDBriC0-uY4" title="Premo Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            }

        </div>
    )
}
export default AppVideo;