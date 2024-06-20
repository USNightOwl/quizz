import homeRepository from "./homeRepository";


const repositories = {
  home: homeRepository,
};

export const RepositoryFactory = {
  get: (name: (keyof typeof repositories)) => repositories[name],
};
