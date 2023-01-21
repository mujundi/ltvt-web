import Image from "next/image";
import styles from "./styles.module.css"
import { Oxygen } from "@next/font/google";

const oxygen = Oxygen({
    weight: '700',
    subsets: ['latin'],
    
})

export default function LandingPage() {
    return (
        <div className={styles.container}>
            <Image 
                className={styles.landingImage}
                src="/images/crescent-moon.jpg"
                alt="crescent-moon"
                fill={true}
            />
            <div className={styles.content}>
                <h1 className={oxygen.className}>Lunar Terminator Visualization Tool</h1>
                <button className={styles.launchBtn}>Open App</button>
                <div className={styles.linkBtnContainer}>
                    <button>Button One</button>
                    <button>Button Two</button>
                    <button>Button Three</button>
                </div>
            </div>
        </div>
    );
}