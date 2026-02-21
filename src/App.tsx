import { ThemeProvider } from 'styled-components';
import { ConfigProvider } from 'antd';
import { theme } from './theme';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: theme.colors.primary
          }
        }}
      >
        <Layout>
          <HomePage />
        </Layout>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
