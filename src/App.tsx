import Attribution from './components/Attribution'
import AgeCalculator from './components/AgeCalculator/AgeCalculator'

const App = () => {
  return (
    <main className="relative min-h-screen pt-[115px] md:pt-[155px]">
      <div className="px-2">
        <AgeCalculator/>
      </div>
      <div className="absolute bottom-0 w-full h-10 flex items-center justify-center">
        <Attribution/>
      </div>
    </main>
  )
}

export default App
