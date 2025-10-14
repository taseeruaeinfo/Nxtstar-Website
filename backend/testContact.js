import fetch from 'node-fetch';

const testContactForm = async () => {
  const testData = {
    name: "Test User",
    phone: "+971582594158",
    email: "test@example.com",
    message: "This is a test message from the contact form."
  };

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();
    console.log('Response:', result);
  } catch (error) {
    console.error('Error:', error);
  }
};

testContactForm();