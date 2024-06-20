import homeRepository from "./homeRepository";
import examRepository from "./examsRepository";


const repositories = {
  home: homeRepository,
  exams: examRepository,
};

export const RepositoryFactory = {
  get: (name: (keyof typeof repositories)) => repositories[name],
};
