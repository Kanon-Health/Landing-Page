export const handler = async (event: any) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers, body: '' };

  try {
    const body = event.body; // Event body is already a string
    
    // We just forward the data to the Google Script URL
    const response = await fetch(process.env.GOOGLE_SCRIPT_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body,
    });

    const result = await response.text();

    return { 
      statusCode: 200, 
      headers, 
      body: JSON.stringify({ message: result }) 
    };
  } catch (error: any) {
    console.error('Bridge Error:', error);
    return { 
      statusCode: 500, 
      headers, 
      body: JSON.stringify({ error: error.message }) 
    };
  }
};