const API_BASE_URL = 'http://localhost:3001'; // Example placeholder

// Dummy function to simulate login
export async function login(username: string, password: string) {
  // Simulate an API call
  if (username === 'user' && password === 'password') {
    return {
      accountId: '1234',
      userName: username,
      firstName: 'John',
      lastName: 'Doe',
    };
  } else {
    throw new Error('Login failed');
  }
}

// Function to fetch meter readings (replace with actual logic)
export async function fetchMeterReadings(accountId: string) {
  return [
    { meterReadingId: 1, meterReadingDate: '2024-04-19', meterReadingType: 'Gas', readingValue: '12345' },
    { meterReadingId: 2, meterReadingDate: '2024-04-20', meterReadingType: 'Electricity', readingValue: '67890' },
  ];
}

// Function to create a new meter reading (replace with actual logic)
export async function createMeterReading(accountId: string, meterReading: any) {
  // Simulate an API call to create a new meter reading
  return { meterReadingId: new Date().getTime() };
}