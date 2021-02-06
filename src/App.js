import { useRef } from 'react';
import useFetch from './hook/useFetch';
import Container from './components/Container';
import Panel from './components/Panel';

const App = () => {
  
  const { isLoading, data: images } = useFetch("https://api.unsplash.com/photos/?client_id=HDwEvLJFQ05fBZsTCwb-V7hQFlXRS8OF-8JxdSpWLDQ&page=1&per_page=6");

  const panelRefs = useRef([]);
  
  const toggleActivePanel = (e) => {
    const clickedPanel = e.currentTarget;
    panelRefs.current.forEach(panel => {
      if (panel.id === clickedPanel.id) {
        clickedPanel.classList.add('is-active');
      } else {
        panel.classList.remove('is-active');
      }
    });
  }

  return (
      <Container>
        {isLoading && <div>Is Loading...</div>}
        {images && images.map((image, index) =>
          <Panel
            ref={element => panelRefs.current[index] = element}
            key={image.id}
            id={image.id}
            url={image.urls.small}
            heading={image.alt_description}
            toggleActivePanel={toggleActivePanel}
            />
        )}
      </Container>
  );
}

export default App;
