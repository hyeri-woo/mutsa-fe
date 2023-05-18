import React from 'react'
import imageUrl from '../data/loading.gif'
import styles from './Loading.module.css'

export default function Loading() {
    return (
        <img src={imageUrl} alt="" className={styles.imgLoading}/>
    )
}
