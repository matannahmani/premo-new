import {Popover, Spacer} from '@geist-ui/react';
import { ChevronRight, Globe } from '@geist-ui/react-icons';
import Link from 'next/link'
import { useRef } from 'react';

const LangChange = () => {
    const arrow = useRef();
    const content = () => (
        <div style={{ padding: '0 24px'}}>
          <Link href='' locale='en'><span style={{color: '#333333',cursor: 'pointer'}}>English</span></Link>
          <Spacer y={.5} />
          <Link href='' locale='kr'><span style={{color: '#333333',cursor: 'pointer'}}>한글</span></Link>
        </div>
      )
    const changeHandler = (e) => {
        if (arrow.current !== null) {
            e ? arrow.current.style.transform = "rotate(-90deg)" : arrow.current.style.transform = "rotate(0deg)"
        }
    }
    return (
      <>
    <Popover placement="topEnd" className="langchange" onVisibleChange={changeHandler} content={content}><Globe className="globe"/> Change Langunge <span ref={arrow}><ChevronRight/></span></Popover>
      </>
    )
}

export default LangChange;