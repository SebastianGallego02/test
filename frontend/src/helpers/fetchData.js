const fetchData = async ( endpoint, method = 'GET', body = null) => {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        // Puedes agregar otras cabeceras según sea necesario
      },
      body: body ? JSON.stringify(body) : null,
    };

    //console.log(endpoint)
    const response = await fetch(`http://localhost:3000/api/v1/${endpoint}`, options);
    const jsonData = await response.json();
    //console.log(jsonData)
    return jsonData.response;
  } catch (e) {
    console.error(e);
  }
};

export default fetchData;