'use client';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import { infoIcon, moonIcon, notififcationIcon, searchIcon } from '@/app/Assets/Images/AssetsExports';
import { usePathname } from 'next/navigation';

const TopBar: React.FC<{}> = () => {
    const searchInputRef = React.useRef(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        const handleFocus = () => setIsFocused(true);
        const handleBlur = () => setIsFocused(false);

        const inputElement = searchInputRef.current;
        inputElement.addEventListener('focus', handleFocus);
        inputElement.addEventListener('blur', handleBlur);

        // Cleanup the event listeners on unmount
        return () => {
            inputElement.removeEventListener('focus', handleFocus);
            inputElement.removeEventListener('blur', handleBlur);
        };
    }, []);

    console.log(isFocused)
    return (
        <div className={styles.topBarCont}>
            <CurrentPage />
            <div className={styles.actionsCont}>
                <div className={`${styles.searchBar} ${isFocused ? styles.searchBarFocused : styles.searchBarUnfocused}`}>
                    <Image className={styles.icon} src={searchIcon} alt={'Search Icon'} />
                    <input ref={searchInputRef} className={styles.searchInput} type={'text'} placeholder={'Search'} />
                </div>
                <Image className={styles.icon} src={notififcationIcon} alt={'Notification Icon'} />
                <Image className={styles.icon} src={moonIcon} alt={"Theme Icon"} />
                <Image className={styles.icon} src={infoIcon} alt={'Info Icon'} />
            </div>
        </div>
    )
}

const CurrentPage = () => {
    const pathname = usePathname();
    return (
        <div className={styles.pageInfoCont}>
            <div className={styles.routePath}>Pages{pathname}</div>
            <div className={styles.routeName}>{pathname.split('/')[1]}</div>
        </div>
    )
}

export default TopBar