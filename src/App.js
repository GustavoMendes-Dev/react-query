import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import Todos from './Todo';

function App() {
  return (
    <QueryClientProvider client={QueryClient}>
      <Todos />
    </QueryClientProvider>
  );
}

export default App;
