import { Metadata } from 'next';
import WebsiteProvider from './WebsiteProvider';

export default function ({ children, params: { websiteId } }) {
  return <WebsiteProvider websiteId={websiteId}>{children}</WebsiteProvider>;
}

export const metadata: Metadata = {
  title: {
    template: '%s | ' + (process.env.APP_NAME || 'Umami'),
    default: 'Websites | ' + (process.env.APP_NAME || 'Umami'),
  },
};
