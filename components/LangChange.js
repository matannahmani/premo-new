import {Popover, Spacer} from '@geist-ui/react';
import { ChevronRight, Globe } from '@geist-ui/react-icons';
import { i18n } from 'next-i18next';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link'
import { useRef } from 'react';

const LangChange = () => {
    const arrow = useRef();
    const router = useRouter();
    const content = () => (
        <div style={{ padding: '0 24px'}}>
          <Link href={{pathname: '',query: router.query}} locale='en'><span style={{color: '#333333',cursor: 'pointer'}}>English</span></Link>
          <Spacer y={.5} />
          <Link href={{pathname: '',query: router.query}} locale='kr'><span style={{color: '#333333',cursor: 'pointer'}}>한글</span></Link>
          <Spacer y={.5} />
        </div>
      )
    const changeHandler = (e) => {
        if (arrow.current !== null) {
            e ? arrow.current.style.transform = "rotate(-90deg)" : arrow.current.style.transform = "rotate(0deg)"
        }
    }
    return (
      <>
    <Popover style={{cursor: 'pointer'}} leaveDelay={100} placement="topEnd" className="langchange" onVisibleChange={changeHandler} content={content}><Globe className="globe"/> Change Langunge <span ref={arrow}><ChevronRight/></span></Popover>
      </>
    )
}

export default LangChange;