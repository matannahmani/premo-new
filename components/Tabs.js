import {useState} from 'react';

const Tabs = ({title,children}) => {
    // const [tab,setTab] = useState(props.initialValue || 0);

    return (
        <div className="tab-section">
            {console.log(title)}
            <div className="tab-header">
            </div>
            <div className="tab-bod">
                {children}
            </div>
        </div>
    )
}
const Body = ({ children }) => children;
Tabs.Body = Body;

export default Tabs;