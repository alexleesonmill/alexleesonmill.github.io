import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ConfigProvider } from 'antd';
import { theme } from './theme';
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { Book } from './pages/Book';
import { Writing } from './pages/Writing';
import { Updates } from './pages/Updates';
import { Contact } from './pages/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: theme.colors.primary,
          },
        }}
      >
        <BrowserRouter basename="/">
          <Layout>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/book" element={<Book />} />
              <Route path="/writing" element={<Writing />} />
              <Route path="/updates" element={<Updates />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
