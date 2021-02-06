import { useState, useEffect } from 'react';
import useFetch from './hook/useFetch';
import Container from './components/Container';
import Panel from './components/Panel';

const App = () => {
  
  const { isLoading, data: images } = useFetch("https://api.unsplash.com/photos/?client_id=HDwEvLJFQ05fBZsTCwb-V7hQFlXRS8OF-8JxdSpWLDQ&page=1&per_page=6");

  const [panels, setPanels] = useState();

  const toggleActive = (e) => {
    const current = e.currentTarget.id;

    panels.forEach(x => {
      if (x.id === current) {
       x.dataset.active = "true" 
      } else {
        x.dataset.active = "false"
      }
    })
  };

  useEffect(() => {
    setPanels(document.querySelectorAll('.panel'));
  }, [])

  return (
      <Container>
        {isLoading && <div>Is Loading...</div>}
        {images && images.map(image =>
          <Panel
            id={image.id}
            url={image.urls.small}
            heading={image.alt_description}
            toggleActive={toggleActive} 
            isActive={false}
            />
        )}
      </Container>
  );
}

export default App;
