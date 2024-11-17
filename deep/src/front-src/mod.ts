export const Url = (request: Request): string => `${(request.headers.get('x-forwarded-proto') || 'http')}://${request.headers.get('x-forwarded-host') || request.headers.get('host')}${new URL(request.url).pathname}${new URL(request.url).search}`;

  