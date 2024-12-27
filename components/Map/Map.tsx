import styles from "./Map.module.scss";

export default function Map() {
    return (
        <section className={styles.section}>
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac7fb154513d30f91ffd3d9f7f9d4d548119aa1bed11635b1423479eb4af65ff8&amp;source=constructor"
                width="100%"
                height="490"
                frameBorder="0"
            ></iframe>
        </section>

    );
}
