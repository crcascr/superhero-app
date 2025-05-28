"use client";
import { useEffect, useState } from "react";
import { getSuperhero } from "@/services";
import { GetSuperheroProps, Superhero, ErrorResponse } from "@/interfaces";

export const useGetSuperhero = ({ id }: GetSuperheroProps) => {
  const [data, setData] = useState<Superhero | null>(null);
  const [error, setError] = useState<ErrorResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchSuperhero = async () => {
      setLoading(true);
      setError(null);
      const response = await getSuperhero({ id });

      if (response.success) {
        setData(response.success);
      } else {
        setError(response.error ?? { status: 500, message: "Unknown error" });
      }

      setLoading(false);
    };

    fetchSuperhero();
  }, [id]);

  return { data, error, loading };
};
