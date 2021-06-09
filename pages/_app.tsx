import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import ColorVariables from '../styles/ColorVariables';
import ShadowVariables from '../styles/ShadowVariables';

/**
 * Application component
 *
 * @param props - props of component
 */
export default function MyApp(props: AppProps): ReactElement {
  return (
    <>
      <ShadowVariables/>
      <ColorVariables/>
      <GlobalStyles/>
      <props.Component {...props.pageProps} />
    </>
  );
}
