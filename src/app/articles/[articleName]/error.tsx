'use client'

import { AppLink } from "@/shared/components/app-link"

export default function ArticleError(){
    return (
        <>
            <p>No articles for you my lady</p>
            <AppLink href='/'>Go Home</AppLink>
        </>
    )
}