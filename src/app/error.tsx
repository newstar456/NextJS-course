'use client';

import { ERRORS } from "./errors";

export default function HomePageError({error}:{error:Error}) {
    if(error.message === ERRORS.NOT_FOUND) {
        return <>Articles not found</>
    }
    return<p>Something went wrong...</p>
}