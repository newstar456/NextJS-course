'use client';

import { useState } from 'react';
import { ROUTING } from './routing';
import { AppLink } from './shared/components/app-link';
import { articleStorage } from './ArticleStorage';

type ArticlePreviewProps = {
  name: string;
  text: string;
};

export const getLikeKey= (articleName:string) =>`drag13_blog_1_like_${articleName}`
export function ArticlePreview({ name, text }: ArticlePreviewProps) {
    
    const [liked, setLiked] = useState(articleStorage.liked(name));

    // useEffect(isStorageReady()) return{
    //     const likeKey = getLikeKey(name);
    //     const likeValue = localStorage.getItem(likeKey);
    //     setLiked(likeValue === 'like');
    // }, [name])

  const like = () => {
    // const likeKey = getLikeKey(name);
    // localStorage.setItem(likeKey, 'like')
    articleStorage.like(name);
    setLiked(true);
  };

//   console.log(`LIKED VALUE`, liked);

  return (
    <>
        <AppLink href={ROUTING.article(name)}>{text}</AppLink>
        <button type='button' onClick={like} suppressHydrationWarning>{liked ? '👍': 'like'}</button>
      {/* <AppLink href={ROUTING.article(name)}>{text}</AppLink>
      <button onClick={like} type="button" suppressHydrationWarning>
        {liked ? '👍' : 'like'}
      </button> */}
    </>
  );
}
