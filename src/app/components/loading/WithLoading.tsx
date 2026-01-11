"use client";

import React, { useState, useEffect } from "react";
import Loading from "@/app/components/styles/global_styles/loading/loading";

interface WithLoadingProps<T> {
  children: (data: T) => React.ReactNode;
  fetchData: () => Promise<T>;
  loadingComponent?: React.ReactNode;
  errorComponent?: (error: Error) => React.ReactNode;
}

/**
 * HOC that handles loading states for data fetching
 * Usage: <WithLoading fetchData={fetchUserData}>{(data) => <UserProfile data={data} />}</WithLoading>
 */
export function WithLoading<T>({
  children,
  fetchData,
  loadingComponent,
  errorComponent,
}: WithLoadingProps<T>) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await fetchData();

        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error("An error occurred"));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [fetchData]);

  if (isLoading) {
    return <>{loadingComponent || <Loading />}</>;
  }

  if (error) {
    if (errorComponent) {
      return <>{errorComponent(error)}</>;
    }
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-600 font-semibold">Error loading data</p>
          <p className="text-gray-600">{error.message}</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        No data available
      </div>
    );
  }

  return <>{children(data)}</>;
}

/**
 * Hook for managing loading states
 */
export function useLoading<T>(fetchFn: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await fetchFn();
      setData(result);
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error("An error occurred");
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, execute };
}
