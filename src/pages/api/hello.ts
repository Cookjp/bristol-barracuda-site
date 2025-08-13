export const GET = async ({ request }) => {
  return new Response('Hello from Vercel!', {
    headers: { 'Content-Type': 'text/plain' }
  });
};