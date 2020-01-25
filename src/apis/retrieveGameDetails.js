export default async payload => {
  try {
    const result = await fetch(`http://localhost:8000/minesweeper/v1/games/${payload.id}/`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const data = await result.json();
    return data;
  } catch (err) {
    return -1;
  }
};
