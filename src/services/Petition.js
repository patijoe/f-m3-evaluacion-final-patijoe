const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';

const petition = () => fetch(ENDPOINT).then(response => response.json());
export {petition};