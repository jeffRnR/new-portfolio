import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: "https://e97d5903ba570ec9617d33427574a338@o4507966541660160.ingest.de.sentry.io/4507966546706512",
});

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./sentry.server.config');
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('./sentry.edge.config');
  }
}

export const onRequestError = Sentry.captureRequestError;
