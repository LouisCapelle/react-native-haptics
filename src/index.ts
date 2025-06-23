// Reexport the native module. On web, it will be resolved to ReactNativeHapticsModule.web.ts
// and on native platforms to ReactNativeHapticsModule.ts
export { default } from './ReactNativeHapticsModule';
export { default as ReactNativeHapticsView } from './ReactNativeHapticsView';
export * from  './ReactNativeHaptics.types';
