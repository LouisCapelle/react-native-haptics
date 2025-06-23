import { registerWebModule, NativeModule } from 'expo';

import { ReactNativeHapticsModuleEvents } from './ReactNativeHaptics.types';

class ReactNativeHapticsModule extends NativeModule<ReactNativeHapticsModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ReactNativeHapticsModule, 'ReactNativeHapticsModule');
