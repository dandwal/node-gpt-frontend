import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
const QueryProvider = ({ children }:{children: ReactNode}) => {
    return <QueryClientProvider client={new QueryClient()}>{children}</QueryClientProvider>
}

export default QueryProvider;