async function connectToDevice() {
  try {
    const device = await navigator.usb.requestDevice({ filters: [{ vendorId: 0x1234, productId: 0xabcd }] });
    const connection = await device.open();
    await connection.selectConfiguration(1);
    await connection.claimInterface(0);

    // Your code to interact with the device
    // e.g. send/receive data, control the device

    await connection.close();
  } catch (error) {
    console.error('Error connecting to the device:', error);
  }
}

connectToDevice();
