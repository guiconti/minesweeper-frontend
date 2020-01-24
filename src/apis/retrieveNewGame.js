export default async payload => {
  try {
    const result = await fetch('http://localhost:8000/minesweeper/games/', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    const data = await result.json();
    return data;
  } catch (err) {
    return -1;
  }
}
