export const getCategories = async () => {
  const response = await fetch('http://jservice.io/api/categories?count=20');
  const json = await response.json();
  return json;
};
export const getCategoryById = async id => {
  const response = await fetch(`http://jservice.io/api/category?id=${id}`);
  const json = await response.json();
  return json;
};
