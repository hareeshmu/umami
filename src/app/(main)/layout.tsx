import { Metadata } from 'next';
import App from './App';
import NavBar from './NavBar';
import Page from 'components/layout/Page';
import styles from './layout.module.css';

export default function ({ children }) {
  if (process.env.DISABLE_UI) {
    return null;
  }

  return (
    <App>
      <main className={styles.layout}>
        <nav
          className={styles.nav}
          style={{ display: process.env.SHOW_NAVBAR !== 'false' ? 'block' : 'none' }}
        >
          <NavBar />
        </nav>
        <section className={styles.body}>
          <Page>{children}</Page>
        </section>
      </main>
    </App>
  );
}

export const metadata: Metadata = {
  title: {
    template: '%s | ' + (process.env.APP_NAME || 'Umami'),
    default: process.env.APP_NAME || 'Umami',
  },
};
