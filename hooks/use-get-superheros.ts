"use client";
import { useEffect, useState } from "react";
import { getSuperheros } from "@/services";
import {
  GetSuperherosProps,
  SuperheroListResponse,
  ErrorResponse,
} from "@/interfaces";

export const useGetSuperheroes = ({ page, size }: GetSuperherosProps) => {
  const [data, setData] = useState<SuperheroListResponse | null>(null);
  const [error, setError] = useState<ErrorResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchSuperheroes = async () => {
      setLoading(true);
      setError(null);
      const response = await getSuperheros({ page, size });

      if (response.success) {
        setData(response.success);
      } else {
        setError(response.error ?? { status: 500, message: "Unknown error" });
      }

      setLoading(false);
    };

    fetchSuperheroes();
  }, [page, size]);

  return { data, error, loading };
};
