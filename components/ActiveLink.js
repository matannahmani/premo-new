import Link from "next/link";
import { useRouter } from "next/router";
import React from 'react'

const ActiveLink = ({href, children}) => {
    const router = useRouter();

    let className = children.props.className || ''
    if (router.pathname === href) {
      className = `${className} bm-item-active`
    }

    return (
        <Link href={href}>
            {React.cloneElement(children, { className })}
        </Link>
    )
}
export default ActiveLink;