export default async payload => {
  try {
    const result = await fetch('http://localhost:8000/minesweeper/v1/games/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ difficulty: 0 })
    });
    const data = await result.json();
    return data;
  } catch (err) {
    return -1;
  }
};
