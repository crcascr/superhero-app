export const ApiRoutes = {
  superheroes: (page: number, size: number) =>
    `/superheroes?page=${page}&size=${size}`,
  superhero: (id: number) => `/hero?id=${id}`,
};
