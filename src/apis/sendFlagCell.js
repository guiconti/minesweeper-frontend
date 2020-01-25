export default async payload => {
  try {
    const result = await fetch(`http://localhost:8000/minesweeper/v1/games/${payload.id}/flag/`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ x: payload.x, y: payload.y })
    });
    const data = await result.json();
    return data;
  } catch (err) {
    return -1;
  }
};
