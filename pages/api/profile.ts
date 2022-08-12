import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const imageDirectory = path.join(process.cwd(), 'public/images');
  const fullPath = path.join(imageDirectory, `profile.jpg`);
  const stat = fs.statSync(fullPath);

  res.writeHead(200, {
    'Content-Type': 'image/jpg',
    'Content-Length': stat.size,
  });

  const readStream = fs.createReadStream(fullPath);

  await new Promise(resolve => {
    readStream.pipe(res);
    readStream.on('end', resolve);
  });
}
