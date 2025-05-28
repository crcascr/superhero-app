"use client";
import { useCallback, useEffect, useState } from "react";
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

  const fetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    const response = await getSuperheros({ page, size });

    if (response.success) {
      setData(response.success);
    } else {
      setError(response.error ?? { status: 500, message: "Unknown error" });
    }

    setLoading(false);
  }, [page, size]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { data, error, loading, refetch: fetch };
};
