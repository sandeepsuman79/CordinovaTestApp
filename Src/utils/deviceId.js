import { Platform, NativeModules, Dimensions } from 'react-native';
var RNDeviceInfo = NativeModules.RNDeviceInfo;
var OS = Platform.OS;
let uniqueId;
export async function getUniqueId() {
  if (!uniqueId) {
    if (OS === 'android' || OS === 'ios' || OS === 'windows') {
      uniqueId = await RNDeviceInfo.getUniqueId();
    } else {
      uniqueId = 'unknown';
    }
  }
  console.log('UniqueId...',uniqueId);
}