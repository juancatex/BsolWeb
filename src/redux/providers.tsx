'use client'

import { Modalstore } from './store'
import { Provider } from 'react-redux'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function Providers ({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Provider store={Modalstore}>
        {children}
    </Provider>
}
