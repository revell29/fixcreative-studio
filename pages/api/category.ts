import { getCategory } from 'lib/api/commons';
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => handler(req, res);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;
    switch (method) {
      case 'GET':
        const category = await getCategory();
        return res.status(200).json(category);
      default:
        res.setHeader('Allow', ['GET']);
        res.status(405).send({
          message: 'Method Not Allowed',
        });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
};
