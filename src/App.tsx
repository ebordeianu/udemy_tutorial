import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HeaderNavigation } from './components/HeaderNavigation';
import { ROUTE } from './constants/route';
import AllProductsPage from './containers/AllProductsPage';
import CheckoutPage from './containers/CheckoutPage';
import HomePage from './containers/HomePage';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './store/rootReducer';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import startRootSaga from './store/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(startRootSaga);

(window as any).shopspree = store;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='app-container'>
          <HeaderNavigation />
          <Routes>
            <Route element={<CheckoutPage />} path={ROUTE.CHECKOUT} />
            <Route element={<AllProductsPage />} path={ROUTE.ALL_PRODUCTS} />
            <Route element={<HomePage />} path={ROUTE.HOME} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
