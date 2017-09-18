const index = () => (
  $.ajax(
    {
      method: 'GET',
      url: '/api/todos'
    }
  )
);

const create = (todo) => (
  $.ajax(
    {
      method: 'POST',
      url: '/api/todos',
      data: { todo }
    }
  )
);

export default {
  index,
  create
};
