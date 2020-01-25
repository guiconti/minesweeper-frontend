export default async payload => {
  const result = await fetch(`http://localhost:8000/minesweeper/v1/games/${payload.id}/open/`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ x: payload.x, y: payload.y })
  });
  if (!result.ok) {
    throw result;
  }
  const data = await result.json();
  return data;
};
