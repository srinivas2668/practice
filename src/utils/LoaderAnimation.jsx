const LoaderAnimation=()=>
{
    return (<div className="flex justify-center items-center h-full">
      <div className="flex space-x-2">
        {/* Dot 1 */}
        <div
          className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: '0s' }} // Apply delay via style prop
        ></div>
        {/* Dot 2 */}
        <div
          className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: '0.2s' }} // Apply delay via style prop
        ></div>
        {/* Dot 3 */}
        <div
          className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: '0.4s' }} // Apply delay via style prop
        ></div>
      </div>
    </div>)
}
export default LoaderAnimation;