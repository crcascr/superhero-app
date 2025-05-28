import { ErrorResponse, Superhero, SuperheroListResponse } from "@/interfaces";

export interface GetSuperherosProps {
  page: number;
  size: number;
}

export interface GetSuperheroProps {
  id: number;
}

export interface GetSuperherosResponse {
  success?: SuperheroListResponse;
  error?: ErrorResponse;
}

export interface GetSuperheroResponse {
  success?: Superhero;
  error?: ErrorResponse;
}
