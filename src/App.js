import useFetch from './hook/useFetch';

function App() {
  
  const { isLoading, data: images } = useFetch("https://api.unsplash.com/photos/?client_id=HDwEvLJFQ05fBZsTCwb-V7hQFlXRS8OF-8JxdSpWLDQ&page=1&per_page=6");

  return (
      <div className="container">
        {isLoading && <div>Is Loading...</div>}
        {images && images.map(image => {
            return (
              <div
                className="panel"
                key={image.id}
                style={{ backgroundImage: `url(${image.urls.small})` }}>
                <h3>
                  {image.alt_description}
                </h3>
              </div>
            )}
          )}
      </div>        
  );
}

export default App;
