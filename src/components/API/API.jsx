export const getFetch = async (name, page) => {
  const basUrl = 'https://pixabay.com/api/';
  const apiOption =
    '?key=30147666-01af3a5d8270a6833dad9b4e7&image_type=photo&orientation=horizontal&per_page=12';
  const apiPag = `&page=${page}`;
  const apiName = `&q=${name}`;

  return await fetch(basUrl + apiOption + apiName + apiPag).then(res =>
    res.json()
  );
};
