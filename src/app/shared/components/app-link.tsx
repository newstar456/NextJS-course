import Link from "next/link";
import styles from './app-link.module.css';
import React, {ReactNode} from 'react';
import { UrlObject } from "url";


export function AppLink({children, href} : {children: ReactNode, href: string | UrlObject}){
    return (
        <Link href={href} className={styles.root}>
            {children}
        </Link>
        )
}