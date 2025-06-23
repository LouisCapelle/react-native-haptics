import { NativeModule, requireNativeModule } from 'expo';

import { ReactNativeHapticsModuleEvents } from './ReactNativeHaptics.types';

declare class ReactNativeHapticsModule extends NativeModule<ReactNativeHapticsModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ReactNativeHapticsModule>('ReactNativeHaptics');
