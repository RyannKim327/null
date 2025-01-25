import { AndroidClient } from 'android-client';

interface DeviceInfo {
  deviceId: string;
  deviceName: string;
}

class AndroidConnector {
  private androidClient: AndroidClient;

  constructor() {
    this.androidClient = new AndroidClient();
  }

  async connectToDevice(): Promise<DeviceInfo> {
    try {
      const devices = await this.androidClient.getDevices();
      if (devices.length === 0) {
        throw new Error('No devices available');
      }

      const device = devices[0];
      await this.androidClient.connect(device.deviceId);

      const deviceInfo: DeviceInfo = {
        deviceId: device.deviceId,
        deviceName: device.deviceName,
      };

      return deviceInfo;
    } catch (error) {
      console.error(`Error connecting to device: ${error.message}`);
      throw error;
    }
  }

  async executeCommand(deviceInfo: DeviceInfo, command: string): Promise<string> {
    try {
      const response = await this.androidClient.executeCommand(deviceInfo.deviceId, command);
      return response.trim();
    } catch (error) {
      console.error(`Error executing command on device: ${error.message}`);
      throw error;
    }
  }
}

async function main() {
  const connector = new AndroidConnector();
  const deviceInfo = await connector.connectToDevice();

  console.log(`Connected to device: ${deviceInfo.deviceName}`);

  const command = 'ls -l';
  const response = await connector.executeCommand(deviceInfo, command);
  console.log(`Response from device: ${response}`);
}

main().catch((error) => {
  console.error(`Error occurred: ${error.message}`);
});
