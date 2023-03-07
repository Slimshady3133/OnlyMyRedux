const router = require('express').Router();
const { Task } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const tasksAll = await Task.findAll({
      raw: true,
      order: [['id', 'ASC']],
    });
    res.json(tasksAll);
  } catch (message) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { body } = req.body;
    if (body !== '') {
      const newTask = await Task.create({
        body,
        done: false,
      });
      res.status(200).json(newTask);
    }
  } catch (message) {
    res.status(500).json({ message: 'Crushed' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Task.destroy({ where: { id } });
    res.json(Number(id));
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    console.log(req.body.body);
    const { id } = req.params;
    const { body } = req.body;
    const todo = await Task.update(
      {
        body,
      },
      {
        where: { id },
        returning: true,
      },
    );
    res.json(todo);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.put('/upd/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { done } = req.body;
    const todoCheck = await Task.update(
      {
        done: !done,
      },
      {
        where: { id },
        returning: true,
      },
    );
    res.json(todoCheck);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});
module.exports = router;
