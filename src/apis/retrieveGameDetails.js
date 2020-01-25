export default async payload => {
  const result = await fetch(`http://localhost:8000/minesweeper/v1/games/${payload.id}/`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  if (!result.ok) {
    throw result;
  }
  const data = await result.json();
  return data;
};
