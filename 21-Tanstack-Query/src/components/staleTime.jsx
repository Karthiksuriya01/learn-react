import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const StaleTime = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
    staleTime: 5000, // it means it becomes stale after 5 seconds
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h1>Stale Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default StaleTime;