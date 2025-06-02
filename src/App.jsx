import { Link, Outlet, useNavigation } from "react-router-dom";
import { useLoaderData } from "react-router-dom";


function App() {

  const catImages = useLoaderData(); 
  const navigation = useNavigation();
  console.log(catImages,navigation.state,'catdetails');
  
  return (
    <>
    <Link to='/'>back to Home</Link>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6">🐱 Cat Gallery</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {catImages.map((cat) => (
            <div key={cat.id} className="bg-white rounded shadow p-2">
              <img
                src={cat.url}
                alt={`Cat ${cat.id}`}
                className="w-full h-auto rounded"
                style={{ aspectRatio: `${cat.width} / ${cat.height}` }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <Outlet/>
      </div>
    </>
  );
}

export default App;
