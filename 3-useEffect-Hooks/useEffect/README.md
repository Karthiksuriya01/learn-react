#useEffect()
- it allows you to perform "side effects" in your components. 
  some examples of side effects are:
      . fetching data
      . directly updating the DOM etc.

syntax: useEffect(() => {}); 

Note: 
1) useEffect cannot be in conditional statements

❌ Don't do this:                     ✅ Do this instead:
                                            
if (value > 0) {                     useEffect(() => {
    useEffect(() => {                    if(value > 0) {
        console.log("call useEffect")        console.log("call useEffect")
    });                                  }
}                                    });

2) [Content for second note appears to be missing]