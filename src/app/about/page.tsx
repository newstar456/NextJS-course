import Image from "next/image";
import myImage from './me.jpg'
import styles from './about.module.css'

export default function AboutPage(){
    return (
        <article className={styles.root}>
            <Image src={myImage} alt='Vitalii Ruban photo' loading='eager'/>
            <div className={''}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla hic natus sed qui dolorem voluptate minus, necessitatibus quos molestias, minima voluptates aliquam atque sapiente debitis architecto earum distinctio deleniti! Deserunt dolorem, deleniti debitis at minima adipisci suscipit, maxime sed saepe dolore quam excepturi a magni? Nostrum quod reiciendis animi! Obcaecati!
            </div>
        </article>
    )
}