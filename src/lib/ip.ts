import { NextApiRequest } from 'next';

export const getIp = (req: NextApiRequest) => {
  const ip = req.headers['x-real-ip'] || req.connection.remoteAddress;

  if (!ip) {
    return null;
  }

  if (Array.isArray(ip)) {
    return ip[0];
  }

  return ip;
};
