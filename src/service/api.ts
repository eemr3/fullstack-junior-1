const SECRETE_KEY = 'naranja-labs'; // Essa chave deve ser guardada em um arquivo .env. Para fins de demonstração/didático, ela está aqui.

export const getAllJobs = async () => {
  try {
    const result = await fetch(`http://localhost:3000/api/jobs`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${SECRETE_KEY}`,
      },
    });

    return result.json();
  } catch (error) {
    console.error('Error:', error);
    return error;
  }
};

export const getJobsByLevel = async (level: string) => {
  try {
    const result = await fetch(`http://localhost:3000/api/jobs?level=${level}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${SECRETE_KEY}`,
      },
    });

    return result.json();
  } catch (error) {
    console.error('Error:', error);
    return error;
  }
};

export const getJobById = async (id: string) => {
  try {
    const result = await fetch(`http://localhost:3000/api/jobs/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${SECRETE_KEY}`,
      },
    });

    return result.json();
  } catch (error) {
    return error;
  }
};
