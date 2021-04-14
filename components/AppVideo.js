import { Image, Text } from "@geist-ui/react"
import { InView } from 'react-intersection-observer';

const AppVideo = (props) => {

    return (
    <InView triggerOnce>
    {({ inView, ref }) => (
        <div ref={ref} style={props.style} className={`app-video ${props.flip ? "app-video-margin" : ''}`}>
            <div className="app-video-header">
                <Image className="app-video-icon" src={props.icon}/>
                <Text className="app-video-title" h4>{props.title}</Text>
            </div>
            {!props.hide && 
            <div className={`app-video-box ${props.flip ? 'app-video-box-flip' : ''}`}>
            <Image className={`app-video-img ${props.flip ? 'app-video-box-flip' : ''}`} src={props.img}/>
            { inView ?
            <iframe width="560" className="app-video-container" style={props.flip && {transform: 'scale(-1,1)'}} height="315" src={props.video} title="Premo Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            :
            <div className="app-video-container"></div>
        }
            </div>
            }
        </div>
    )}
    </InView>
    )
}
export default AppVideo;