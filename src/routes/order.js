import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const orders = await req.context.models.Order.findAll();
  return res.send(orders);
});

router.get('/:orderId', async (req, res) => {
  const order = await req.context.models.Order.findByPk(
    req.params.orderId,
  );
  return res.send(order);
});

router.post('/', async (req, res) => {
  console.log(req.body.userId);
  const order = await req.context.models.Order.create({
    text: req.body.text,
    userId: req.body.userId,
  });

  return res.send(order);
});

router.delete('/:orderId', async (req, res) => {
  const result = await req.context.models.Order.destroy({
    where: { id: req.params.orderId },
  });

  return res.send(true);
});

export default router;
