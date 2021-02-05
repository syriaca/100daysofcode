import useFetch from './hook/useFetch';
import Container from './components/Container';

function App() {
  
  const { isLoading, data: images } = useFetch("https://api.unsplash.com/photos/?client_id=HDwEvLJFQ05fBZsTCwb-V7hQFlXRS8OF-8JxdSpWLDQ&page=1&per_page=6");

  return (
      <Container>
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
      </Container>
  );
}

export default App;
