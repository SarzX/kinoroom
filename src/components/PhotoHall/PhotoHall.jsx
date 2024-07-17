import React from 'react';
import styles from './PhotoHall.module.css'
import Container from "../Container/Container.jsx";
import {motion} from "framer-motion";

const PhotoHall = () => {
    const images = [
        {image: 'https://thumb.tildacdn.com/tild3839-3564-4731-a661-626265643966/-/resize/480x360/-/format/webp/IMG_0254-HDR.jpg'},
        {image: 'https://thumb.tildacdn.com/tild3766-3163-4536-b833-323261343738/-/resize/480x360/-/format/webp/_MGS3554-HDR.jpg'},
        {image: 'https://thumb.tildacdn.com/tild3865-6133-4765-b338-616534376135/-/resize/480x360/-/format/webp/IMG_9875-HDR.jpg'},
        {image: 'https://thumb.tildacdn.com/tild3732-3933-4064-b965-363034623266/-/resize/480x360/-/format/webp/IMG_0269-HDR.jpg'},
        {image: 'https://thumb.tildacdn.com/tild3637-3935-4631-a237-363265396436/-/resize/480x360/-/format/webp/IMG_7691-HDR.jpg'},
        {image: 'https://thumb.tildacdn.com/tild3638-3366-4137-a330-623463306635/-/resize/480x360/-/format/webp/IMG_7901-HDR.jpg'},
        {image: 'https://thumb.tildacdn.com/tild3937-3762-4538-a438-613264623530/-/resize/480x360/-/format/webp/_MGS3566-HDR.jpg'},
        {image: 'https://thumb.tildacdn.com/tild3835-6437-4134-b365-613562396564/-/resize/480x360/-/format/webp/photo_2023-05-20_23-.jpg'},
    ]
    return (
        <div className={styles.photo_hall}>
            <Container>
                <h1
                    style={{textAlign:'center',marginBottom:'30px'}}
                    className={styles.title}>
                    Фотки нашего заведения
                </h1>
                <div className={styles.inner}>
                    {images.map((el, i) => (
                        <motion.img
                            initial={{y: 20, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{duration: 0.3, delay: i * 0.1}}
                            key={i} src={el.image} alt="image"/>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default PhotoHall;
