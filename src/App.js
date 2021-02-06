import useFetch from './hook/useFetch';
import Container from './components/Container';
import Panel from './components/Panel';

function App() {
  
  const { isLoading, data: images } = useFetch("https://api.unsplash.com/photos/?client_id=HDwEvLJFQ05fBZsTCwb-V7hQFlXRS8OF-8JxdSpWLDQ&page=1&per_page=6");

  return (
      <Container>
        {isLoading && <div>Is Loading...</div>}
        {images && images.map(image => <Panel key={image.id} url={image.urls.small} heading={image.alt_description} />)}
      </Container>
  );
}

export default App;
