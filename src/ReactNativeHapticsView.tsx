import { requireNativeView } from 'expo';
import * as React from 'react';

import { ReactNativeHapticsViewProps } from './ReactNativeHaptics.types';

const NativeView: React.ComponentType<ReactNativeHapticsViewProps> =
  requireNativeView('ReactNativeHaptics');

export default function ReactNativeHapticsView(props: ReactNativeHapticsViewProps) {
  return <NativeView {...props} />;
}
