import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const response = await fetch("https://fakestoreapi.com/products/1");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const RefetchInterval = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
    refetchInterval: 5000, // it means it will refetch every 5 seconds
});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h1>Refetch Interval Data</h1>
      <pre>
      - automatically refetch data </pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default RefetchInterval;