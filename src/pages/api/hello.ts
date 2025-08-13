export const GET = async ({ request }) => {
  console.log('API request received:', request.method, request.url);
  return new Response('Hello from Vercel!');
};