import { GridPattern } from "./components/ui/grid-pattern"
import { Spotlight } from "./components/ui/spotlight"
import { cn } from "./lib/utils"
import RecipeApp from "./Recipe-Book/Recipe"



const App = () => {
  return (
    
    <div className="h-screen w-full flex items-center justify-center bg-black flex-col text-white">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 opacity-100"
        fill="white"
      />



      <div className="z-50 flex flex-row-reverse items-center justify-center">
      <RecipeApp/>
      <img src="https://miro.medium.com/v2/resize:fit:800/1*sWrBpCqe5TniZjalJvl5rA.png" alt="" />
      </div>
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />

     
      {/* <BackgroundBeams /> */}
    </div>
  )
}

export default App