import * as React from 'react';

import { ReactNativeHapticsViewProps } from './ReactNativeHaptics.types';

export default function ReactNativeHapticsView(props: ReactNativeHapticsViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
