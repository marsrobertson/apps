// Copyright 2017-2018 @polkadot/ui-react-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Text } from '@polkadot/types';

import { withObservableDiv } from './with/index';

const Component: React.ComponentType<any> = withObservableDiv('systemVersion')(
  (value: Text | string = 'unknown'): string =>
    value.toString(),
  { className: 'rx--NodeVersion' }
);

export default Component;
