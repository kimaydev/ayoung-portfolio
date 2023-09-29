import { DATABASE_ID, TOKEN } from '@/config';

const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'Notion-Version': '2022-06-28',
    'content-type': 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  },
  body: JSON.stringify({ page_size: 100 }),
};

export const postData = async () => {
  try {
    const result = await fetch(
      `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
      options,
    );
    const data = await result.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
