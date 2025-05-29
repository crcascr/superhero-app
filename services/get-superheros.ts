import { isAxiosError } from "axios";
import { apiClient } from "@/services";
import { ApiRoutes } from "@/constants";
import {
  GetSuperherosProps,
  GetSuperherosResponse,
  SuperheroListResponse,
} from "@/interfaces";

export const getSuperheros = async ({
  page,
  size,
}: GetSuperherosProps): Promise<GetSuperherosResponse> => {
  try {
    const response = await apiClient.get<SuperheroListResponse>(
      ApiRoutes.superheroes(page, size)
    );

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
