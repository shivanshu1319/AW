const API_URL = 'http://localhost:5000/faqs';

export async function getFaqs() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export async function createFaq(faq) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(faq)
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export async function updateFaq(id, faq) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(faq)
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export async function deleteFaq(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
}
