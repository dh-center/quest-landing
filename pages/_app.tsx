import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';

/**
 * @param props - props of component
 */
function MyApp(props: AppProps): ReactElement {
  return <props.Component {...props.pageProps} />;
}
export default MyApp;
