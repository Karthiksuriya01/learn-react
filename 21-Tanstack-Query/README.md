# useQuery
- it is the heart of Tanst
- Syntax : useQuery({queryKey : ["todo],queryFn:fetchData})

# Deduplication
- It means if we try to fetch same data multiple times at once, it will send one request instead of many. 
- Deduplication helps avoid asking for the same data over again

# Stale Time
- It refers to the duration during which cached data is considered fresh
- During this period, the data is served from the cache without triggering a background refetch, which can imporve performance and reduce unncessary network requests

# refetchInterval
- sometimes we want to refetch our data after some interval of time for that purpose this is used 

- automatically refetch data 