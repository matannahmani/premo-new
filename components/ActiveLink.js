import Link from "next/link";
import { useRouter } from "next/router";
import React,{forwardRef} from 'react'
const RefFixer = React.forwardRef((props, ref) => (
    <a ref={ref} {...props}>
      {props.children}
    </a>
  ))
const ActiveLink = ({href, children,logout}) => {
    const router = useRouter();

    let className = children.props.className || ''
    if (router.pathname === href && !logout) {
      className = `${className} bm-item-active`
    }

    return (
        <Link href={logout ? '/' : href} passHref>
            <RefFixer ref={href}>
                {React.cloneElement(children, { className })}
            </RefFixer>
        </Link>
    )
}
export default ActiveLink;