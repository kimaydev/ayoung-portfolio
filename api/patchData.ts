import axios from 'axios';

export const getNotionData = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    const result = res.data;
    console.log(`결과 : ${result}`);
    return result;
  } catch (error) {
    console.log(error);
  }
};
