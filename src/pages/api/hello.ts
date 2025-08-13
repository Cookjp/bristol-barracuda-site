export const GET = async ({ request }) => {
  console.log('Request received:', request);
  return new Response('Hello from Vercel!', {
    headers: { 'Content-Type': 'text/plain' }
  });
};