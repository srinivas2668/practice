const Dummy=()=>
{
  return(
    <div className="flex h-96 items-center justify-center">
      <div className="text-center p-8 rounded-2xl text-white shadow-xl bg-gray-800 max-w-md">
        <p className="text-2xl font-semibold mb-4">
          This is a demo for React Router.
        </p>
        <p className="text-lg text-gray-300">
          Check out{" "}
          <a
            href="https://reactrouter.com"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            the docs at reactrouter.com
          </a>
          .
        </p>
      </div>
    </div>
  )
}
export default Dummy;