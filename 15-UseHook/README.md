#Use hook
- The use() hook lets you read and load resources asynchrounously, such as promises or context.<mark>Unlike 
other hooks, it can be utilized in loops and conditionals</mark>


- In certain conditions, it can serve as a replacement for useEffect() when fetching data, and it streamlines context usage by allowing you to use use(context) instead of useContext(context)