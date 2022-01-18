import React from "react";
import styles from "./Loading.module.css";

const Loading = ({ loading = true}) => {
    return (
        <div className={loading ? styles.loading : styles.none}>
            <div className={styles.uil_ring_css} style={{ transform: 'scale(0.79)' }}>
                <div></div>
            </div>
        </div>
    );
}

export default Loading;