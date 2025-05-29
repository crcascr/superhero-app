export const ApiRoutes = {
  superheroes: (page: number, size: number) =>
    `/heroes?page=${page}&size=${size}`,
  superhero: (id: number) => `/hero?id=${id}`,
};
