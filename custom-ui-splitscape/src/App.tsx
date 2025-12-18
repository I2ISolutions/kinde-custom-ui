import React from 'react';
import { Widget } from '../kindeSrc/components/widget';
import { DefaultLayout } from '../kindeSrc/layouts/default';
import { Root } from '../kindeSrc/root';
import { type KindePageEvent } from '@kinde/infrastructure';

// Default Kinde event data - in production this would come from Kinde's infrastructure
const getDefaultKindeEvent = (): KindePageEvent => {
  return {
    context: {
      widget: {
        content: {
          page_title: 'Zopkit - Login',
          heading: 'Welcome back to Zopkit',
          description: 'Sign in to access your dashboard',
          logo_alt: 'Zopkit Logo',
        },
      },
    },
    request: {
      authUrlParams: {
        orgCode: 'org_default' as any,
        state: '',
        clientId: '',
        redirectUri: '',
      },
      locale: {
        isRtl: false,
        lang: 'en',
      },
      route: {
        context: 'login',
        flow: 'login',
        path: 'auth',
      },
    },
  };
};

const App: React.FC = () => {
  const kindeEvent = getDefaultKindeEvent();

  return (
    <Root context={kindeEvent.context} request={kindeEvent.request}>
      <DefaultLayout>
        <Widget
          heading={kindeEvent.context.widget.content.heading}
          description={kindeEvent.context.widget.content.description}
        />
      </DefaultLayout>
    </Root>
  );
};

export default App;
