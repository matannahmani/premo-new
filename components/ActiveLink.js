import Link from "next/link";
import { useRouter } from "next/router";
import React,{forwardRef} from 'react'
const RefFixer = React.forwardRef(function RefFixer(props, ref) {
    return (
      props.children
    );
  });
const ActiveLink = ({href, children}) => {
    const router = useRouter();

    let className = children.props.className || ''
    if (router.pathname === href) {
      className = `${className} bm-item-active`
    }

    return (
        <Link href={href}>
            <RefFixer>
                {React.cloneElement(children, { className })}
            </RefFixer>
        </Link>
    )
}
export default ActiveLink;