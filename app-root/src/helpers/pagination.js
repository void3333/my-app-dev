// pagination.js
export function paginate(array, pageSize, pageNumber) {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

export function getTotalPages(array, pageSize) {
  return Math.ceil(array.length / pageSize);
}
