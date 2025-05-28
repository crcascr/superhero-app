import { ApiRoutes } from "@/constants";
import {
  GetSuperheroProps,
  GetSuperheroResponse,
  Superhero,
} from "@/interfaces";
import { apiClient } from "@/services";
import { isAxiosError } from "axios";

export const getSuperhero = async ({
  id,
}: GetSuperheroProps): Promise<GetSuperheroResponse> => {
  try {
    const response = await apiClient.get<Superhero>(ApiRoutes.superhero(id));

    return { success: response.data };
  } catch (err) {
    if (isAxiosError(err)) {
      return {
        error: {
          status: err.response?.status || 500,
          message: err.response?.data?.message || "Error fetching superheroes",
        },
      };
    }

    return {
      error: {
        status: 500,
        message: "Unknown error occurred",
      },
    };
  }
};
