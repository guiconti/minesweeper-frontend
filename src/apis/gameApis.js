const BACKEND_HOST = 'http://localhost:8000';
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

export const retrieveNewGame = async payload => {
  const result = await fetch(`${BACKEND_HOST}/minesweeper/v1/games/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload)
  });
  if (!result.ok) {
    throw result;
  }
  const data = await result.json();
  return data;
};


export const retrieveGameDetails = async payload => {
  const result = await fetch(`${BACKEND_HOST}/minesweeper/v1/games/${payload.id}/`, {
    method: 'GET',
    headers
  });
  if (!result.ok) {
    throw result;
  }
  const data = await result.json();
  return data;
};

export const sendOpenCell = async payload => {
  const result = await fetch(`${BACKEND_HOST}/minesweeper/v1/games/${payload.id}/open/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({ x: payload.x, y: payload.y })
  });
  if (!result.ok) {
    throw result;
  }
  const data = await result.json();
  return data;
};


export const sendFlagCell = async payload => {
  const result = await fetch(`${BACKEND_HOST}/minesweeper/v1/games/${payload.id}/flag/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({ x: payload.x, y: payload.y })
  });
  if (!result.ok) {
    throw result;
  }
  const data = await result.json();
  return data;
};
