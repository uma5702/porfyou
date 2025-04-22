var token = localStorage.getItem('token');

export const fetchPortfolios = async () => {
  token = localStorage.getItem('token');
  
  const res = await fetch('http://localhost:3000/portfolio', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const fetchPortfolio = async (id: string) => {
  token = localStorage.getItem('token');
  console.log("fetchPortfolio - ",id);
  const res = await fetch(`http://localhost:3000/portfolio/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const createPortfolio = async (title: string, description: string) => {
  token = localStorage.getItem('token');
  const res = await fetch(`http://localhost:3000/portfolio`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}` 
    },
    body: JSON.stringify({ title, description }),
  });
  return res.json();
};
export const updatePortfolio = async (id: string, title: string, description: string) => {
  token = localStorage.getItem('token');

  const res = await fetch(`http://localhost:3000/portfolio/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, description }),
  });
  return res.json();
};
export const deletePortfolio = async (id: string) => {
  token = localStorage.getItem('token');

  const res = await fetch(`http://localhost:3000/portfolio/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};
